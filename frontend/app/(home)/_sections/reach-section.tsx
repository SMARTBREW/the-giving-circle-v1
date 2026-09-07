import ReachBand from "@/components/reach-band";
import { REACH_STATS } from "@/constants";

export default function ReachSection() {
  return (
    <ReachBand
      id="reach"
      eyebrow="Our Reach"
      title="One Circle, Countless Lives"
      stats={REACH_STATS}
    />
  );
}
