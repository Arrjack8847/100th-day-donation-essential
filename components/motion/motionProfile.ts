export type EssentialMotionProfile = {
  compactMotion: boolean;
  lowPowerMotion: boolean;
  distanceScale: number;
  durationScale: number;
  staggerScale: number;
};

export function getEssentialMotionProfile(): EssentialMotionProfile {
  const compactMotion = window.innerWidth <= 768;
  const deviceMemory =
    (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  const hardwareThreads = navigator.hardwareConcurrency || 8;
  const lowPowerMotion =
    compactMotion && (deviceMemory <= 4 || hardwareThreads <= 4);

  return {
    compactMotion,
    lowPowerMotion,
    distanceScale: compactMotion ? (lowPowerMotion ? 0.42 : 0.52) : 1,
    durationScale: compactMotion ? (lowPowerMotion ? 0.82 : 0.88) : 1,
    staggerScale: compactMotion ? (lowPowerMotion ? 0.7 : 0.78) : 1,
  };
}
