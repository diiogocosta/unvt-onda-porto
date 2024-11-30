import { useState } from "react";

export const QuemSomos = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "O QUE É O UNVT?",
      content:
        "O UNVT é um movimento de jovens cristãos que faz parte da Onda Dura, uma comunidade dedicada a promover a fé de forma vibrante e inclusiva. O nosso objetivo é criar um espaço acolhedor onde os jovens possam explorar a espiritualidade, desenvolver relações significativas e crescer na sua jornada de fé.",
      color: "#FF6B00", // Laranja
    },
    {
      title: "PARA QUEM?",
      content:
        "O UNVT está aberto a todos os jovens que estão a construir as suas vidas através dos estudos, trabalho e relações. A nossa programação é pensada para ser relevante e acessível, proporcionando um ambiente onde todos se sintam bem-vindos.",
      color: "#00B2FF", // Azul
    },
    {
      title: "NOSSA CULTURA",
      content:
        "No UNVT, cultivamos uma cultura que valoriza princípios bíblicos, acolhimento e excelência. Através de encontros dinâmicos, louvores intensos e atividades criativas, procuramos oferecer uma experiência de culto que ressoe com as expectativas dos jovens de hoje.",
      color: "#01dd73", // Verde
    },
  ];

  return (
    <div className="font-mono shadow-lg text-white">
      <div className="grid grid-cols-3 h-16">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index)}
            className={`
              relative transition-all duration-300 font-bold 
            `}
            style={{ backgroundColor: section.color }}
          >
            <span className="text-black font-bold text-sm">
              {section.title}
            </span>
          </button>
        ))}
      </div>

      <div
        className="relative p-8 min-h-[400px] transition-all duration-300 shadow-lg"
        style={{ backgroundColor: sections[activeSection].color }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />

        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 tracking-wider">
            {sections[activeSection].title}
          </h2>

          <p className="text-lg leading-relaxed whitespace-pre-line">
            {sections[activeSection].content}
          </p>
        </div>
      </div>
    </div>
  );
};
