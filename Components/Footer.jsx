import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "support@cryptoforgood.com",
    "info@teamKASH.com",
    "Contact us",
  ];
  const usefullLink = ["Home", "About Us", "Company Bio"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="text-blue-200">Crypto</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2">
                for Good
              </span>
            </h6>
            <p className="text-blue-100 leading-relaxed">
              Empowering positive change through blockchain technology. Join our
              decentralized platform to support meaningful projects and create
              lasting impact in communities worldwide.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-blue-200">
              Products
            </h6>
            {productList.map((el, i) => (
              <p
                className="mb-4 text-blue-100 hover:text-white transition-colors duration-200"
                key={i + 1}
              >
                <a href="#!" className="hover:underline">
                  {el}
                </a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-blue-200">
              Useful links
            </h6>
            {usefullLink.map((el, i) => (
              <p
                className="mb-4 text-blue-100 hover:text-white transition-colors duration-200"
                key={i + 1}
              >
                <a href="#!" className="hover:underline">
                  {el}
                </a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-blue-200">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p
                className="mb-4 text-blue-100 hover:text-white transition-colors duration-200"
                key={i + 1}
              >
                <a href="#!" className="hover:underline">
                  {el}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-blue-800 bg-gradient-to-r from-blue-800 to-blue-900 p-6 text-center">
        <span className="text-blue-200">2025 copyright@TeamKASH - </span>
        <span className="font-semibold text-white">Crypto for Good</span>
        <p className="mt-2 text-sm text-blue-300">
          Blockchain-Powered Impact Platform
        </p>
      </div>
    </footer>
  );
};

export default Footer;
