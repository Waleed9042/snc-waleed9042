import { useState, useEffect } from "react";
import axios from "axios";

const APIService = () => {
  const [cancelToken, setCancelToken] = useState(axios.CancelToken.source());

  useEffect(() => {
    return () => {
      cancelToken.cancel("Request canceled");
    };
  }, [cancelToken]);

  const callAPI = async (endpoint: string, method = "GET", data = null) => {
    cancelToken.cancel("Request canceled");

    const newCancelToken = axios.CancelToken.source();
    setCancelToken(newCancelToken);

    try {
      const response = await axios({
        method: method,
        url: endpoint,
        data: data,
        cancelToken: newCancelToken.token,
      });
      return response.data;
    } catch (error: any) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.error("API call error:", error);
        throw error;
      }
    }
  };

  return {
    callAPI,
  };
};

export default APIService;
