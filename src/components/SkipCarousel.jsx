import { getImageUrl } from "../utils/helpers";
import { formatPrice } from "../utils/helpers";

const SkipCarousel = ({ skips, onSkipSelect, selectedSkipId }) => {
  const extendedSkips = [...skips, ...skips]; // Duplicate for seamless loop

  return (
    <div className="w-full absolute bottom-0 left-0 bg-black/50 backdrop-blur-sm py-4 overflow-hidden">
      <div className="animate-scroll flex gap-8">
        {extendedSkips.map((skip, index) => (
          <div
            key={`${skip.id}-${index}`}
            onClick={() => onSkipSelect(skip)}
            className={`cursor-pointer flex-shrink-0 w-48 h-40 p-3 rounded-xl transition-all duration-300 transform hover:scale-110
                            ${
                              selectedSkipId === skip.id
                                ? "bg-amber-500/30 border-2 border-amber-500"
                                : "bg-gray-800/80 border-2 border-transparent"
                            }`}
          >
            <img
              src={getImageUrl(skip.size)}
              alt={`${skip.size} Yard Skip`}
              className="w-full h-24 object-cover rounded-md"
            />
            <p className="text-white text-center font-bold mt-2">
              {skip.size} Yard
            </p>
            <p className="text-amber-400 text-center text-sm">
              {formatPrice(skip.price_before_vat * (1 + skip.vat / 100))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkipCarousel;
