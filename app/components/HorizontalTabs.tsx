"use client";
import { useState } from "react";
import { CampusCard } from "./CampusCard";

export const HorizontalTabs = ({ selectedColor }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "A TUA JORNADA COMEÇA AQUI",
      content: <CampusCard />,
    },
    {
      title: "QUEM SOMOS?",
      content: <CampusCard />,
    },
  ];

  return (
    <div
      className="w-full py-6 relative bg-[#FF6B00] transition-all duration-300 ease-in-out"
      style={{ backgroundColor: selectedColor }}
    >
      <div className="container mx-auto px-4">
        <div className="flex border-b border-black">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`
                px-8 py-4 text-lg font-['Supply'] font-bold tracking-wide
                ${
                  activeTab === index
                    ? "border-b-2 border-black text-black"
                    : "text-gray-600 hover:text-black"
                }
                transition-colors duration-300
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="py-8">
          <div className="max-w-3xl">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};
