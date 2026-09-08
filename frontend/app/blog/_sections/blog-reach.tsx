import ReachBand from "@/components/reach-band";
import { BLOG_REACH, REACH_STATS } from "@/constants";

export default function BlogReach() {
  return (
    <ReachBand
      eyebrow={BLOG_REACH.eyebrow}
      title={BLOG_REACH.title}
      subtitle={BLOG_REACH.subtitle}
      stats={REACH_STATS}
    />
  );
}
