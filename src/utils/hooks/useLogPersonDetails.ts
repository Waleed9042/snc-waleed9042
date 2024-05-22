import { useEffect, useRef } from "react";
import { IPerson } from "@/types/person";

const useLogPersonDetails = (
  personDetails: IPerson | null,
  enableLogs: boolean,
  currentTime: string,
) => {
  const currentTimeRef = useRef(currentTime);
  useEffect(() => {
    currentTimeRef.current = currentTime;
  }, [currentTime]);
  useEffect(() => {
    if (enableLogs && personDetails) {
      console.log("Person Details:", personDetails);
      console.log("Current Time:", currentTimeRef.current.toLocaleString());
    }
  }, [personDetails, enableLogs]);
};

export default useLogPersonDetails;
