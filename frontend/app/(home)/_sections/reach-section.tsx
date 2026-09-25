import ReachBand from "@/components/reach-band";
import { REACH_STATS } from "@/constants";

export default function ReachSection() {
  return (
    <ReachBand
      id="reach"
      eyebrow="Our impact"
      title="Circles creating change"
      stats={REACH_STATS}
    />
  );
}
