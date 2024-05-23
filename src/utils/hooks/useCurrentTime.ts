import { useState, useEffect } from "react";
import { getFormattedTime } from "../client/client-utils";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { currentTime };
};
export default useCurrentTime;
