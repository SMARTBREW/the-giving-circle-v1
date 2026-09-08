"use client";

import { useState } from "react";
import FaqItem from "@/components/faq-item";
import { FAQ_ITEMS } from "@/constants";

type FaqEntry = {
  question: string;
  answer: string;
};

export default function FaqsAccordion({
  items = FAQ_ITEMS,
}: {
  items?: readonly FaqEntry[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="flex w-full flex-col items-center gap-4 sm:gap-5 md:gap-6">
      {items.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
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
