(ns cljs-boids.main)

(def FPS 30)
(def SCREEN_SIZE 500)
(def NUM_BOIDS 100)
(def BOID_SIZE 5)
(def MAX_SPEED 7)
(def canvas (.getElementById js/document "world"))
(def ctx (.getContext canvas "2d"))
(def boids (array))

(defn make-boids []
  (loop [i 0]
    (when (< i NUM_BOIDS)
      (aset boids i (js-obj "x" (* (js/Math.random) SCREEN_SIZE)
                            "y" (* (js/Math.random) SCREEN_SIZE)
                            "vx" 0
                            "vy" 0))
      (recur (inc i)))))

(defn get-distance [b1 b2]
  (let [x (- (aget b1 "x") (aget b2 "x"))
        y (- (aget b1 "y") (aget b2 "y"))]
    (Math/sqrt (+ (* x x) (* y y)))))

(defn += [boid property value]
  (aset boid property
        (+ (aget boid property) value)))

(defn -= [boid property value]
  (aset boid property
        (- (aget boid property) value)))

(defn *= [boid property value]
  (aset boid property
        (* (aget boid property) value)))

(defn x-boid [index] (aget boids index "x"))
(defn y-boid [index] (aget boids index "y"))
(defn vx-boid [index] (aget boids index "vx"))
(defn vy-boid [index] (aget boids index "vy"))

(defn rule1 [index]
  (let [num-boids (.-length boids)]
    (loop [x 0 y 0 i 0]
      (if (< i num-boids)
        (recur (+ x (x-boid i)) (+ y (y-boid i)) (inc i))
        (let [cx (/ (- x (x-boid index)) (- num-boids 1))
              cy (/ (- y (y-boid index)) (- num-boids 1))
              b (aget boids index)]
          (+= b "vx" (/ (- cx (aget b "x")) 100))
          (+= b "vy" (/ (- cy (aget b "y")) 100)))))))

(defn rule2 [index]
  (let [num-boids (.-length boids)]
    (loop [i 0]
      (if (< i num-boids)
        (if (== i index) (recur (inc i))
          (let [b (aget boids index)
                d (get-distance (aget boids i) b)]
            (when (< d 5)
              (-= b "vx" (- (x-boid i) (aget b "x")))
              (-= b "vy" (- (y-boid i) (aget b "y"))))
            (recur (inc i))))))))

(defn rule3 [index]
  (let [num-boids (.-length boids)]
    (loop [vx 0 vy 0 i 0]
      (if (< i num-boids)
        (recur (+ vx (vx-boid i)) (+ vy (vy-boid i)) (inc i))
        (let [cvx (/ (- vx (vx-boid index)) (- num-boids 1))
              cvy (/ (- vy (vy-boid index)) (- num-boids 1))
              b (aget boids index)]
          (+= b "vx" (/ (- cvx (aget b "vx")) 8))
          (+= b "vy" (/ (- cvy (aget b "vy")) 8)))))))

(defn restrict [index]
  (let [b (aget boids index)
        speed (Math/sqrt (+ (* (aget b "vx") (aget b "vx"))
                            (* (aget b "vy") (aget b "vy"))))]
    (if (>= speed MAX_SPEED)
      (let [r (/ MAX_SPEED speed)]
        (*= b "vx" r)
        (*= b "vy" r)))

    (if (or (and (< (aget b "x") 0) (< (aget b "vx") 0))
            (and (> (aget b "x") SCREEN_SIZE) (> (aget b "vx") 0)))
      (*= b "vx" -1))

    (if (or (and (< (aget b "y") 0) (< (aget b "vy") 0))
            (and (> (aget b "y") SCREEN_SIZE) (> (aget b "vy") 0)))
      (*= b "vy" -1))))

(defn draw []
  (.clearRect ctx 0 0 SCREEN_SIZE SCREEN_SIZE)
  (loop [i 0]
    (when (< i (.-length boids))
      (.fillRect ctx
                 (- (x-boid i) (/ BOID_SIZE 2))
                 (- (y-boid i) (/ BOID_SIZE 2))
                 BOID_SIZE
                 BOID_SIZE)
      (recur (inc i)))))

(defn move []
  (loop [i 0]
    (when (< i (.-length boids))
      (rule1 i)
      (rule2 i)
      (rule3 i)
      (restrict i)
      (let [b (aget boids i)]
        (+= b "x" (aget b "vx"))
        (+= b "y" (aget b "vy")))
      (recur (inc i)))))

(defn simulate []
  (draw)
  (move))

(defn make-test-boids []
  (aset boids 0 (js-obj "x" 10 "y" 10 "vx" 0 "vy" 0))
  (aset boids 1 (js-obj "x" 100 "y" 100 "vx" 0 "vy" 0))
  (aset boids 2 (js-obj "x" 200 "y" 10 "vx" 0 "vy" 0)))

(defn debug-print [i]
  (.log js/console (aget boids i)))

(defn debug-all-print []
  (loop [i 0]
    (when (< i (.-length boids))
      (debug-print i)
      (recur (inc i)))))

(defn init []
  (set! (.-width canvas) SCREEN_SIZE)
  (set! (.-height canvas) SCREEN_SIZE)
  (set! (.-fillStyle ctx) "rgba(33, 33, 33, 0.8)")

  (make-test-boids)
  (debug-all-print)
  (doall (repeatedly 1000 #(simulate)))
  (.log js/console "finish simulate!")
  (debug-all-print))

(set! (.-onload js/window) init)
