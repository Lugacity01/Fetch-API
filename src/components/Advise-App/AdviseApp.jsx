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
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-[#1f2631]">
      <div className="bg-[#313A49] p-6 rounded-lg shadow-md w-80 text-center">
        <h3 className="text-lg font-semibold mb-2 text-white">
          {isLoading ? "Advice #loading..." : `Advice #${advice.id}`}
        </h3>
        <p className="text-white mb-4 italic">
          {isLoading ? "Loading advice..." : `"${advice.text}"`}
        </p>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="mb-4 flex h-full items-center justify-center text-justify">
                <div className="h-[1px] w-full bg-gray-100 "></div>
                <div className="text-gray-300">&quot; </div>
                <div className="h-[1px] w-full bg-gray-300 "></div>
              </div>
        <button
          onClick={fetchAdvice}
          className="bg-[#51FFAE] text-[#298966] px-4 py-2 rounded hover:bg-[#80edd9] focus:outline-none"
          disabled={isLoading}
        >
          {isLoading ? "Fetching..." : "▶︎"}
        </button>
      </div>
    </div>
  );
};

export default AdviceSlip;
