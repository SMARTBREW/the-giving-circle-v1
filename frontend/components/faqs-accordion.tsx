"use client";

import { useState } from "react";
import FaqItem from "@/components/faq-item";
import { FAQ_ITEMS } from "@/constants";

export default function FaqsAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="flex w-full flex-col items-center gap-6">
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          questionClassName={item.questionClassName}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? -1 : index))
          }
        />
      ))}
    </ul>
  );
}
