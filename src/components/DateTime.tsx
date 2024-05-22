import React from "react";
const Date_Time = ({ currentTime }: { currentTime: string }) => {
  return (
    <div className="bg-white rounded-lg inline-block w-[400px] text-black p-4 m-4">
      <p className="text-xl font-bold">Current Time</p>
      <p className="text-lg">{currentTime}</p>
    </div>
  );
};

export default React.memo(Date_Time);
