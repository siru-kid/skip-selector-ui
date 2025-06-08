import { getImageUrl } from "../utils/helpers";
import { formatPrice } from "../utils/helpers";

const ConfirmationModal = ({ skip, onConfirm, onCancel }) => {
  if (!skip) return null;

  const priceWithVat = skip.price_before_vat * (1 + skip.vat / 100);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg text-white transform transition-all duration-300 scale-95 animate-in fade-in-0 zoom-in-95">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Confirm Your Selection
          </h2>
          <p className="text-center text-gray-400 mb-8">
            Please review the details of your chosen skip before proceeding.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <img
              src={getImageUrl(skip.size)}
              alt={`${skip.size} Yard Skip`}
              className="w-40 h-auto rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-amber-400">
                {skip.size} Yard Skip
              </h3>
              <p className="text-lg">{formatPrice(priceWithVat)} (inc. VAT)</p>
              <p className="text-sm text-gray-400">
                For {skip.hire_period_days} days
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={onCancel}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Confirm Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
