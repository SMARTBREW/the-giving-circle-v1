import type { Metadata } from "next";
import { SITE } from "@/constants";
import ContactApplyForm from "./_sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | The Giving Circle",
  description:
    "Write to The Giving Circle with questions about causes, becoming a Cause Champion, or partnering as an NGO.",
  alternates: { canonical: `${SITE.url}/contact/` },
};

export default function ContactPage() {
  return <ContactApplyForm />;
}
