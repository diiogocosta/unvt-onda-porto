import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-between">
            <Image
              src="/images/onda-dura-logo-white.png"
              alt="Onda Dura Logo"
              width={150}
              height={50}
            />
            <Image
              src="/images/unvt.png"
              alt="Onda Dura Logo"
              width={150}
              height={50}
            />
          </div>
          <div>
            <a
              target="_blank"
              className="text-white text-sm font-semibold hover:text-yellow-500"
              href="https://www.instagram.com/ondaduraporto/"
            >
              <svg
                width="1rem"
                height="1rem"
                focusable="false"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
              <h1>visite nos</h1>
            </a>
            <h3 className="font-bold mb-4">Endereço</h3>
            <p>Rua do Cavaco, 290 - Maia</p>
            <p>Porto - Portugal</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Encontros</h3>
            <p>Domingo às 10:30h</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
