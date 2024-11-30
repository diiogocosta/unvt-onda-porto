"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VerticalItems } from "./components/VerticalItems";
import { WhatsAppCTA } from "./components/WhatsappCTA";
import { Footer } from "./components/Footer";
import { HorizontalTabs } from "./components/HorizontalTabs";

const HomePage = () => {
  const [tabSelectedColor, setTabSelectedColor] = useState("#fb7f26");

  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="bg-yellow py-4">
        <div className="container mx-auto px-4 flex justify-between">
          <Image
            src="/images/onda-dura-logo.png"
            alt="Onda Dura Logo"
            width={150}
            height={50}
          />
          <Image
            src="/images/unvt-black.png"
            alt="Onda Dura Logo"
            width={150}
            height={200}
          />
        </div>
      </header>

      <main>
        <section>
          <VerticalItems getSelectedColor={setTabSelectedColor} />
        </section>

        <section>
          <HorizontalTabs selectedColor={tabSelectedColor} />
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold text-center mb-8">
              Se tiveres alguma dúvida ou quiseres conversar, estamos aqui para
              te ajudar. Envia-nos uma mensagem!
            </h1>
            <WhatsAppCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
