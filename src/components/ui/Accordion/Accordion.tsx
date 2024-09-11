import { cn } from "@/utils/mergeClassNames";
import { useState } from "react";
import Chevron from "@/components/icons/Chevron";

import type { AccordionProps } from "./Accordion.types";

const Accordion = ({ content }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOnClick = (index: number) => {
    setActiveIndex(index === activeIndex ? undefined : index);
  };

  return (
    <ul className="w-full flex flex-col items-center gap-4">
      {content
        .slice(0, isExpanded ? content.length : 4)
        .map(({ title, description }, index) => (
          <li key={title} className="border-b border-ioh-neutral-300 w-full">
            <button
              onClick={() => handleOnClick(index)}
              className="w-full h-full py-4"
            >
              <dl className="flex flex-col text-left gap-4">
                <dt>{title}</dt>
                <dd className={cn("hidden", activeIndex === index && "block")}>
                  {description}
                </dd>
              </dl>
            </button>
          </li>
        ))}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-ioh-red-600 font-bold flex items-center gap-2 px-6 py-3"
      >
        <span>{isExpanded ? "Collapse" : "Read all"}</span>
        <Chevron className="w-3 h-3" />
      </button>
    </ul>
  );
};

export default Accordion;
