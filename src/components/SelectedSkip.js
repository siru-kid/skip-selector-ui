import { getImageUrl } from "../utils/helpers";
import { formatPrice } from "../utils/helpers";
const SelectedSkip = ({ skip, onSelect }) => {
  if (!skip) {
    return (
      <div className="flex items-center justify-center h-full text-white">
        <p>Select a skip from the carousel below to see details.</p>
      </div>
    );
  }

  const priceWithVat = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="w-full lg:w-1/2 flex-shrink-0">
        <img
          src={getImageUrl(skip.size)}
          alt={`${skip.size} Yard Skip`}
          className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="w-full lg:w-1/2 text-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {skip.size} Yard Skip
        </h1>
        <p className="text-lg text-amber-400 mb-6">
          Standard Hire: {skip.hire_period_days} days
        </p>
        <div className="space-y-4 text-base">
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="font-semibold text-gray-400">Price (ex. VAT)</span>
            <span className="font-bold text-white">
              {formatPrice(skip.price_before_vat)}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700 pb-2">
            <span className="font-semibold text-gray-400">
              VAT ({skip.vat}%)
            </span>
            <span className="font-bold text-white">
              {formatPrice(skip.price_before_vat * (skip.vat / 100))}
            </span>
          </div>
          <div className="flex justify-between items-center text-amber-400 text-xl pt-2">
            <span className="font-bold">Total Price (inc. VAT)</span>
            <span className="font-extrabold">{formatPrice(priceWithVat)}</span>
          </div>
        </div>
        <div className="mt-8 space-y-3">
          {skip.allowed_on_road ? (
            <p className="flex items-center gap-2 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Allowed on Road
            </p>
          ) : (
            <p className="flex items-center gap-2 text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Not Allowed on Road
            </p>
          )}
          {skip.allows_heavy_waste ? (
            <p className="flex items-center gap-2 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              Allows Heavy Waste
            </p>
          ) : (
            <p className="flex items-center gap-2 text-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              No Heavy Waste
            </p>
          )}
        </div>
        <button
          onClick={() => onSelect(skip)}
          className="mt-10 w-full bg-amber-500 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20"
        >
          Select This Skip
        </button>
      </div>
    </div>
  );
};

export default SelectedSkip;
