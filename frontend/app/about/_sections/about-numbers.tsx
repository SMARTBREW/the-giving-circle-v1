import ReachBand from "@/components/reach-band";
import { ABOUT_NUMBERS, REACH_STATS } from "@/constants";

export default function AboutNumbers() {
  return (
    <ReachBand
      eyebrow={ABOUT_NUMBERS.eyebrow}
      title={ABOUT_NUMBERS.title}
      stats={REACH_STATS}
      tone="white"
    />
  );
}
