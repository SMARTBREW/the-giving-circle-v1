import ReachBand from "@/components/reach-band";
import { REACH_STATS, STORIES_REACH } from "@/constants";

export default function StoriesReach() {
  return (
    <ReachBand
      eyebrow={STORIES_REACH.eyebrow}
      title={STORIES_REACH.title}
      subtitle={STORIES_REACH.subtitle}
      stats={REACH_STATS}
    />
  );
}
