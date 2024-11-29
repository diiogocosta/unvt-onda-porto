import React from "react";
import Image from "next/image";

export const CampusCard = () => {
  return (
    <div className="p- border-4 border-black">
      <div className="relative h-48 w-full">
        <Image
          src="/images/after.jpg"
          alt="Onda Dura Porto"
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">Onde?</h3>
        <p className="text-gray-700 mb-2">Rua do Cavaco, 290, Maia</p>

        <div className="mb-4">
          <h4 className="text-xl font-bold">Quando?</h4>
          <p className="text-gray-700">Todo domingo às 10:30h</p>
        </div>

        <button className="bg-yellow-400 w-full text-black font-bold py-2 px-6 rounded-md uppercase text-sm hover:bg-yellow-500 transition-colors">
          Saber mais
        </button>
      </div>
    </div>
  );
};
