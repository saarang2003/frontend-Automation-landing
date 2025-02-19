import { useState } from "react";

const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white shadow-md">
      {isPopular && (
        <div className="absolute top-0 right-0 mr-6 -mt-4">
          <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm">
            Most Popular
          </div>
        </div>
      )}
      <div className="mb-5">
        <div className="text-gray-900 dark:text-gray-200 font-semibold mb-1">
          {title}
        </div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-gray-900 dark:text-gray-200 font-bold text-3xl">
            $
          </span>
          <span className="text-gray-900 dark:text-gray-200 font-bold text-4xl">
            {price}
          </span>
          <span className="text-gray-500 font-medium">/mo</span>
        </div>
        <a
          className="w-full inline-flex justify-center rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 transition-colors"
          href="#"
        >
          Purchase Plan
        </a>
      </div>
      <div className="text-gray-900 dark:text-gray-200 font-medium mb-3">
        Includes:
      </div>
      <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-3 h-3 fill-emerald-500 mr-3"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      title: "Essential",
      price: isAnnual ? "29" : "35",
      features: [
        "Unlimited placeholder texts",
        "Consectetur adipiscing elit",
        "Excepteur sint occaecat cupidatat",
        "Officia deserunt mollit anim",
      ],
      isPopular: false,
    },
    {
      title: "Perform",
      price: isAnnual ? "49" : "55",
      features: [
        "Unlimited placeholder texts",
        "Advanced analytics",
        "Dedicated support",
        "API access",
      ],
      isPopular: true,
    },
    {
      title: "Premium",
      price: isAnnual ? "79" : "89",
      features: [
        "All Essential features",
        "Custom integrations",
        "Priority support",
        "Unlimited API calls",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-inter  font-bold text-center">Pricing</h1>
      <div className="flex flex-col justify-center  p-6">
        <div className="flex justify-center max-w-md mx-auto mb-8">
          <div className="relative flex w-full  bg-white rounded-full shadow text-center">
            <button
              className={`flex-1 text-sm font-medium h-8 rounded-full transition-colors flex items-center justify-center px-4 m-2 ${
                isAnnual ? "bg-indigo-500 text-white" : "text-gray-500"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Yearly
            </button>

            <button
              className={`flex-1 text-sm font-medium h-8 rounded-full transition-colors flex items-center justify-center m-2 ${
                !isAnnual ? "bg-indigo-500 text-white" : "text-gray-500"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
