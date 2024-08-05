import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full px-6 py-4 text-left"
        onClick={onClick}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    items[index].onClick && items[index].onClick();
  };

  return (
    <div className="border border-gray-200 rounded-lg">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
