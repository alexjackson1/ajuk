import KUTE from "kute.js";
import { useEffect, useRef, useState } from "react";

interface Tween {
  start: () => void;
  stop: () => void;
}

function createTween(
  pathId: string,
  currentIndex: number,
  nextIndex: number,
  options: Record<string, any> = {}
): Tween {
  return KUTE.fromTo(
    `#${pathId}`,
    { path: `#blob_${currentIndex}` },
    { path: `#blob_${nextIndex}` },
    options
  );
}

function useTweenCache(options?: Record<string, any>) {
  const cache = useRef<Record<string, Tween>>({});
  return {
    get: (pathId: string, currentIndex: number, nextIndex: number) => {
      const key = `${pathId}_${currentIndex}_${nextIndex}`;
      if (!cache.current[key]) {
        cache.current[key] = createTween(
          pathId,
          currentIndex,
          nextIndex,
          options
        );
      }
      return cache.current[key];
    },
  };
}

export function useMorphing(
  paths: string[],
  pathId: string,
  options: Record<string, any> = {}
  // queueSize: number = 3
) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const nextIdx = (currentIdx + 1) % paths.length;
  const incrementIdx = () => setCurrentIdx((currentIdx + 1) % paths.length);
  const tweenOptions = {
    duration: 2000,
    easing: KUTE.Easing.easingCircularInOut,
    delay: 0,
    morphPrecision: 1,
    ...options,
    onComplete: function () {
      console.log("tween completed");
      incrementIdx();
      return options.onComplete?.();
    },
  };
  const { get } = useTweenCache(tweenOptions);

  useEffect(() => {
    const tween = get(pathId, currentIdx, nextIdx);
    tween.start();
    return () => tween.stop();
  }, [currentIdx]);
}

export default useMorphing;
