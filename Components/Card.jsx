import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  console.log(allcampaign);

  const daysLeft = (deadlineInSeconds) => {
    const now = Math.floor(Date.now() / 1000);
    const difference = deadlineInSeconds - now;
    const remainingDays = difference / (60 * 60 * 24);
    return remainingDays > 0 ? Math.ceil(remainingDays) : 0;
  };

  const getProgressPercentage = (target, collected) => {
    if (!target || target === 0) return 0;
    const percentage = (collected / target) * 100;
    return Math.min(percentage, 100);
  };

  const formatEther = (value) => {
    return parseFloat(value).toFixed(4);
  };

  return (
    <div className="section-spacing bg-gradient-to-br from-slate-50 to-blue-50" id="campaigns">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing projects and help bring innovative ideas to life
            through the power of decentralized funding.
          </p>
        </div>

        {/* Campaign Cards */}
        {allcampaign && allcampaign.length > 0 ? (
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {allcampaign.map((campaign, i) => {
              const days = daysLeft(campaign.deadline);
              const progress = getProgressPercentage(campaign.target, campaign.amountCollected);

              return (
                <div
                  onClick={() => {
                    if (campaign.deadline > Math.floor(Date.now() / 1000)) {
                      setDonate(campaign);
                      setOpenModel(true);
                    } else {
                      alert("This campaign has ended. You cannot donate.");
                    }
                  }}
                  key={i + 1}
                  className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image & badges */}
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
                      alt="Campaign"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          days > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {days > 0 ? `${days} days left` : "Expired"}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
                        {progress.toFixed(1)}% funded
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {campaign.title}
                    </h3>
                    <p className="mb-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {campaign.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-semibold text-blue-600">
                          {progress.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-blue-500"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">
                          Ξ {formatEther(campaign.target)}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Target</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">
                          Ξ {formatEther(campaign.amountCollected)}
                        </div>
                        <div className="text-xs text-gray-600 uppercase tracking-wide">Raised</div>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="w-full px-4 py-3 text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-300 transition-all duration-200">
                      <div className="flex items-center justify-center">
                        <svg
                          className="w-4 h-4 mr-2"
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
                        Support This Project
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-blue-100 rounded-full">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-600">No campaigns yet</h3>
            <p className="text-gray-500">Be the first to create an amazing campaign!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;