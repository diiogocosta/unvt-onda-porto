import React, { useState } from "react";

export const VerticalItems = ({
  getSelectedColor,
}: {
  getSelectedColor: (color: string) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    {
      title: "Sentes-te perdido, sem propósito ou direção?",
      description: `Deus tem um plano para ti: "Eu sei os planos que tenho para vós, planos de vos fazer prosperar e dar esperança e um futuro". Confia, Ele criou-te com um propósito.`,
      verse: "(Jeremias 29:11)",
      bgColor: "#fb7f26",
    },
    {
      title: "Porque nada na vida parece satisfazer?",
      description: `Fomos criados para algo maior. "Deus colocou a eternidade no coração humano". Só Ele pode preencher esse vazio.`,
      verse: "(Eclesiastes 3:11)",
      bgColor: "#1aa6e1",
    },
    {
      title: "Quem pode realmente mudar a tua vida?",
      description: `Só Jesus tem o poder para transformar o teu coração e dar-te uma nova vida. "Eu sou o caminho, a verdade e a vida". Ele está à tua espera.`,
      verse: "(João 14:6)",
      bgColor: "#2fdc89",
    },
  ];

  return (
    <div className="flex h-[600px] w-full">
      {/* Colunas verticais */}
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedItem(index);
              getSelectedColor(item.bgColor);
            }}
            className="w-[42px] h-full cursor-pointer flex items-center justify-center relative group"
            style={{ backgroundColor: item.bgColor }}
          >
            <span className="font-bold text-black text-md transform -rotate-90 whitespace-nowrap">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Área de conteúdo */}
      <div
        className="flex-1 p-8 text-black transition-colors duration-300"
        style={{ backgroundColor: items[selectedItem].bgColor }}
      >
        <h2 className="text-2xl font-bold mb-4">{items[selectedItem].title}</h2>
        <p className="text-lg">{items[selectedItem].description}</p>
        <p>{items[selectedItem].verse}</p>
      </div>
    </div>
  );
};
