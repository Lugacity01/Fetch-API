import React, { useState, useEffect } from "react";

const AdviceSlip = () => {
  const [advice, setAdvice] = useState({
    id: null,
    text: "Your advice will appear here...",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    setIsLoading(true);
    setError(null);

    try {
        
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Failed to fetch advice");
      }
      const data = await response.json();
      setAdvice({ id: data.slip.id, text: data.slip.advice });
    } catch (err) {
      setError(err.message);
      setAdvice({ id: null, text: "Your advice will appear here..." });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch advice on component load
  useEffect(() => {
    fetchAdvice();

    const intervalId = setInterval(fetchAdvice, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#1f2631]">
        <div className="relative bg-[#313A49] p-9 rounded-lg shadow-md w-80 h-56 text-center">
            {/* Advice Title */}
            <h3 className="absolute left-4 top-4 right-4 text-sm uppercase text-[#51FFAE]">
                {isLoading ? "Advice Loading..." : `Advice #${advice?.id || "N/A"}`}
            </h3>

            {/* Advice Text absolute left-4 top-20 right-4 text-white italic */}
            <p className={`${isLoading ? 'italic' : advice?.text.length > 50 ? 'text-sm' : 'text-lg'} absolute left-4 top-20 right-4 text-white italic`}>
                {isLoading ? "Fetching an amazing advice..." : `"${advice?.text || "No advice available."}"`}
            </p>

            {/* Error Message */}
            {error && (
            <p className="absolute left-4 bottom-14 text-red-500 text-sm">
                {error}
            </p>
            )}

            {/* Decorative Divider */}
            <div className="absolute left-4 right-4 top-[150px] flex items-center">
            <div className="h-[1px] flex-grow bg-gray-100"></div>
            <span className="text-gray-300 px-2">&quot;</span>
            <div className="h-[1px] flex-grow bg-gray-100"></div>
            </div>

            {/* Fetch Button */}
            <button
            onClick={fetchAdvice}
            className="absolute left-1/2 top-[200px]  transform -translate-x-1/2 bg-[#51FFAE] text-[#298966] px-6 py-2 rounded-md hover:bg-[#80edd9] focus:outline-none transition duration-200 disabled:opacity-50"
            disabled={isLoading}
            >
            {isLoading ? "Fetching..." : "▶︎"}
            </button>
        </div>
    </div>

  );
};

export default AdviceSlip;
