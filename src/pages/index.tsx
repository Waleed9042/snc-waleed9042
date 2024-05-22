import { Button } from "@/components/Button";
import CardSkeleton from "@/components/Skeleton";
import ErrorCard from "@/components/card/ErrorCard";
import ProfileCard from "@/components/card/ProfileCard";
import APIService from "@/services/api-client";
import { Person } from "@/utils/common/person";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const apiService = APIService();
  const [selectedButton, setSelectedButton] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [apiRequestState, setApiRequestState] = useState<{
    data: any;
    isError: boolean;
    isSuccess: boolean;
    message: string;
  }>({
    isError: false,
    isSuccess: false,
    message: "",
    data: null,
  });

  const handleButtonClick = (btn: string) => {
    setSelectedButton(btn === selectedButton && btn !== "PersonA" ? "" : btn);
    fetchEntityData(btn);
  };

  const fetchEntityData = async (entityKey: string) => {
    if (!entityKey) return;
    setIsLoading((prev) => !prev);
    setApiRequestState((prevState) => ({
      ...prevState,
      isError: false,
      isSuccess: false,
      message: "",
    }));

    await apiService
      .callAPI(`api/person?person=${entityKey}`, "GET")
      .then((response) => {
        setApiRequestState((prevState) => ({
          ...prevState,
          isSuccess: true,
          isError: false,
          message: "",
          data: response,
        }));
      })
      .catch((error: any) => {
        console.log("📌 ~ fetchEntityData ~ error:", error);
        setApiRequestState((prevState) => ({
          ...prevState,
          isSuccess: false,
          isError: true,
          message: error?.message,
          data: null,
        }));
      })
      .finally(() => {
        setIsLoading((prev) => !prev);
      });
  };

  return (
    <div>
      <div
        style={{
          height: "60px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
      </div>
      <div
        style={{
          height: "500px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading && <CardSkeleton />}
        {!isLoading && apiRequestState?.isError && (
          <ErrorCard errorMessage={apiRequestState?.message} />
        )}
        {!isLoading && apiRequestState?.isSuccess && apiRequestState?.data && (
          <ProfileCard
            imageSrc={apiRequestState?.data?.profilePictureUrl}
            name={apiRequestState?.data?.name}
            title={apiRequestState?.data?.title}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
