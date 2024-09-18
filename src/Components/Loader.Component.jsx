import React from "react";

const PreLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F3F4F6]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-400"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-700 animate-spin"></div>
      </div>
    </div>
  );
};

export { PreLoader };
