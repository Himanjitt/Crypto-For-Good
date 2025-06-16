import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <span className="coverLine"></span>

      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="object-cover w-full h-full"
          alt="Crowdfunding background"
        />
        <div className="absolute inset-0 backgroundMain opacity-90"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-blue-400 opacity-10 rounded-full"></div>
        <div
          className="floating-element absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-lg transform rotate-45"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="floating-element absolute bottom-32 left-1/4 w-16 h-16 bg-blue-300 opacity-15 rounded-full"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative bg-opacity-75">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>

        <div className="relative px-4 py-20 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
          <div className="flex flex-col items-center justify-between xl:flex-row gap-12">
            {/* Left side content */}
            <div className="w-full max-w-xl xl:pr-16 xl:w-7/12">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Blockchain Powered
              </div>

              <h1 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
                <span className="text-blue-200">Crypto</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  for Good
                </span>
                <br className="hidden md:block" />
                <span className="text-2xl sm:text-3xl text-blue-100 font-light">
                  Blockchain-Powered Impact Platform
                </span>
              </h1>

              <p className="max-w-xl mb-8 text-lg text-blue-100 leading-relaxed">
                Harness the power of blockchain technology to create positive
                change. Build transparent, secure campaigns and connect with a
                global community committed to making the world a better place
                through decentralized funding.
              </p>

              {/* Feature highlights */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center text-blue-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Secure Transactions
                </div>
                <div className="flex items-center text-blue-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Global Reach
                </div>
                <div className="flex items-center text-blue-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Zero Fees
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#campaigns"
                  className="inline-flex items-center px-8 py-4 font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 transform hover:-translate-y-1"
                >
                  Explore Campaigns
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="#learn"
                  className="inline-flex items-center px-8 py-4 font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full max-w-xl xl:w-5/12">
              <div className="campaign-form p-8 sm:p-12">
                {/* Form header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                    Start Your Campaign
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Turn your vision into reality
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Campaign Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })
                      }
                      placeholder="Enter your campaign title"
                      required
                      type="text"
                      className="form-input w-full h-12 px-4 text-gray-800 placeholder-gray-500"
                      id="title"
                      name="title"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe your campaign goals and vision"
                      required
                      rows={3}
                      className="form-input w-full px-4 py-3 text-gray-800 placeholder-gray-500 resize-none"
                      id="description"
                      name="description"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Target Amount (ETH)
                    </label>
                    <div className="relative">
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            amount: e.target.value,
                          })
                        }
                        placeholder="0.00"
                        required
                        type="number"
                        step="0.01"
                        min="0"
                        className="form-input w-full h-12 px-4 pl-12 text-gray-800 placeholder-gray-500"
                        id="amount"
                        name="amount"
                      />
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 font-medium">Ξ</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="deadline"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Campaign Deadline
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })
                      }
                      required
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="form-input w-full h-12 px-4 text-gray-800"
                      id="deadline"
                      name="deadline"
                    />
                  </div>

                  <button
                    onClick={(e) => createNewCampaign(e)}
                    type="submit"
                    className="newColor w-full h-14 px-6 font-semibold text-lg tracking-wide rounded-xl"
                  >
                    Launch Campaign
                  </button>

                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    By creating a campaign, you agree to our terms and
                    conditions. All transactions are secured by blockchain
                    technology.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
