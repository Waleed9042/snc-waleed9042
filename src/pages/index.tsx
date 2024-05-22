import { Button } from "@/components/Button";
import { fetchData } from "@/services/api-client";
import { Person } from "@/utils/common/person";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [apiRequestState, setApiRequestState] = useState({
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    data: {},
  });

  const handleButtonClick = (btn: string) => {
    setSelectedButton(btn === selectedButton && btn !== "PersonA" ? "" : btn);
    fetchEntityData(btn);
  };
  const fetchEntityData = async (entityKey: string) => {
    if (!entityKey) return;
    setApiRequestState((prevState) => ({
      ...prevState,
      isLoading: true,
      isError: false,
      isSuccess: false,
      message: "",
    }));
    try {
      const data = await fetchData(`api/person?person=${entityKey}`, "GET");
      setApiRequestState((prevState) => ({
        ...prevState,
        isLoading: false,
        isSuccess: true,
        message: "",
        data,
      }));
    } catch (err: any) {
      console.log("📌 ~ fetchEntityData ~ err:", err);
      setApiRequestState((prevState) => ({
        ...prevState,
        isLoading: false,
        isSuccess: false,
        isError: true,
        message: err?.message,
        data: {},
      }));
    }
  };
  return (
    <>
      {Object.values(Person).map((person) => (
        <Button
          key={person}
          handleButtonClick={() => handleButtonClick(person)}
          selectedButton={selectedButton}
          buttonType={person}
        >
          {person}
        </Button>
      ))}
    </>
  );
};

export default Home;
