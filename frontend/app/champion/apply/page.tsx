import type { Metadata } from "next";
import ChampionApplyForm from "./_sections/champion-apply-form";

export const metadata: Metadata = {
  title: "Champion a Cause | The Giving Circle",
  description:
    "Choose a cause and bring your circle together to create meaningful impact as a Cause Champion.",
};

export default function ChampionApplyPage() {
  return <ChampionApplyForm />;
}
