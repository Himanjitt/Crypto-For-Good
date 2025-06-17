import React, { useState, useEffect } from "react";

const PupUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setallDonationData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const createDonation = async () => {
    try {
      setIsLoading(true);
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
      setOpenModel(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatEther = (value) => {
    return parseFloat(value).toFixed(4);
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  useEffect(() => {
    const donationsListData = getDonations(donate.pId);
    return async () => {
      const donationData = await donationsListData;
      setallDonationData(donationData);
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={() => setOpenModel(false)}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl transform transition-all max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
            <button
              className="absolute top-4 right-4 p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-200"
              onClick={() => setOpenModel(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="pr-12">
              <h3 className="text-2xl font-bold text-white mb-2">
                {donate.title}
              </h3>
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Target: Ξ {formatEther(donate.target)}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                  </svg>
                  Raised: Ξ {formatEther(donate.amountCollected)}
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 max-h-96 overflow-y-auto">
            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                About this campaign
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {donate.description}
              </p>
            </div>

            {/* Donation Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your donation amount (ETH)
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  required
                  type="number"
                  step="0.001"
                  min="0"
                  className="form-input w-full h-14 px-4 pl-12 text-lg text-gray-800 placeholder-gray-500 rounded-xl"
                  value={amount}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-semibold text-lg">Ξ</span>
                </div>
              </div>
            </div>

            {/* Donations List */}
            {allDonationData && allDonationData.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent donations ({allDonationData.length})
                </h4>
                <div className="space-y-3 max-h-40 overflow-y-auto">
                  {allDonationData.map((donation, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {i + 1}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            Ξ {formatEther(donation.donation)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatAddress(donation.donator)}
                          </p>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">Anonymous</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <button
              className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
              onClick={() => setOpenModel(false)}
            >
              Cancel
            </button>
            <button
              className={`newColor px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
              onClick={createDonation}
              disabled={isLoading || !amount}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                `Donate Ξ ${amount || "0"}`
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PupUp;
