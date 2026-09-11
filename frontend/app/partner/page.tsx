import type { Metadata } from "next";
import PartnerApplyForm from "./_sections/partner-apply-form";

export const metadata: Metadata = {
  title: "Partner as an NGO | The Giving Circle",
  description:
    "Partner with The Giving Circle to connect with Cause Champions. Join our verified NGO partner programme and start partner registration.",
};

export default function PartnerPage() {
  return <PartnerApplyForm />;
}
