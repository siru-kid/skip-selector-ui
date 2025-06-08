import React, { useState, useEffect } from "react";
import ConfirmationModal from "./components/ConfirmationModal";
import SkipCarousel from "./components/SkipCarousel";
import SelectedSkip from "./components/SelectedSkip";
import { skipData } from "./data/skips";

function App() {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [skipToConfirm, setSkipToConfirm] = useState(null);

  useEffect(() => {
    try {
      const sortedData = [...skipData].sort((a, b) => a.size - b.size);
      setSkips(sortedData);
      if (sortedData.length > 0) {
        setSelectedSkip(sortedData[0]);
      }
      setIsLoading(false);
    } catch (err) {
      setError("Failed to load skip data.");
      setIsLoading(false);
    }
  }, []);

  const handleSelectSkipCarousel = (skip) => {
    setSelectedSkip(skip);
  };

  const handleOpenConfirmation = (skip) => {
    setSkipToConfirm(skip);
    setShowModal(true);
  };

  const handleConfirmSelection = () => {
    console.log("Confirmed selection:", skipToConfirm);
    setShowModal(false);
    setSkipToConfirm(null);
  };

  const handleCancelSelection = () => {
    setShowModal(false);
    setSkipToConfirm(null);
  };

  if (isLoading) {
    return (
      <div className="bg-gray-900 h-screen flex items-center justify-center text-white text-xl">
        Loading Skips...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900 h-screen flex items-center justify-center text-white text-xl">
        {error}
      </div>
    );
  }

  return (
    <>
      <style>
        {`
                    @keyframes scroll {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                      animation: scroll 40s linear infinite;
                    }
                    @keyframes keyframes-in {
                        from { opacity: 0; transform: scale(0.95) }
                        to { opacity: 1; transform: scale(1) }
                    }
                    .animate-in {
                        animation: keyframes-in 0.3s ease-out;
                    }
                `}
      </style>
      <main className="bg-gray-900 min-h-screen font-sans flex flex-col justify-center items-center overflow-hidden relative pb-48">
        <header className="absolute top-0 left-0 w-full p-6 z-10">
          <h1 className="text-2xl font-bold text-white text-center">
            Choose Your Skip Size
          </h1>
          <p className="text-md text-gray-400 text-center">
            Select the skip size that best suits your needs
          </p>
        </header>
        <div className="flex-grow flex items-center justify-center w-full">
          <SelectedSkip skip={selectedSkip} onSelect={handleOpenConfirmation} />
        </div>
        <SkipCarousel
          skips={skips}
          onSkipSelect={handleSelectSkipCarousel}
          selectedSkipId={selectedSkip?.id}
        />
      </main>
      <ConfirmationModal
        skip={showModal ? skipToConfirm : null}
        onConfirm={handleConfirmSelection}
        onCancel={handleCancelSelection}
      />
    </>
  );
}

export default App;
