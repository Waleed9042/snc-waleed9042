import { useState } from "react";
import dynamic from "next/dynamic";
import { useAppContext } from "@/contaxt/AppContext";
import APIService from "@/services/api-client";
import { IPerson } from "@/types/person";
const Date_Time = dynamic(() => import("./DateTime"), { ssr: false });
import { Person } from "@/utils/common/person";
import { Button } from "./Button";
import CardSkeleton from "./Skeleton";
import ErrorCard from "./card/ErrorCard";
import ProfileCard from "./card/ProfileCard";
import useLogPersonDetails from "@/utils/hooks/useLogPersonDetails";
import useCurrentTime from "@/utils/hooks/useCurrentTime";

const Content = () => {
  const apiService = APIService();
  const { enableLogs } = useAppContext();
  const { currentTime } = useCurrentTime();
  const [selectedButton, setSelectedButton] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiResponseState, setApiResponseState] = useState<{
    data: IPerson | null;
    isError: boolean;
    isSuccess: boolean;
    message: string;
  }>({
    isError: false,
    isSuccess: false,
    message: "",
    data: null,
  });

  useLogPersonDetails(apiResponseState?.data, enableLogs, currentTime);

  const resetResponseState = () => {
    setApiResponseState({
      isError: false,
      isSuccess: false,
      message: "",
      data: null,
    });
  };

  const handleButtonClick = (btn: string) => {
    //When the first one is selected, it can only be unselected by selecting another one.
    setSelectedButton(btn === selectedButton && btn !== "PersonA" ? "" : btn);
    if (selectedButton !== btn) {
      fetchEntityData(btn);
    } else {
      if (btn !== "PersonA") resetResponseState();
    }
  };

  const fetchEntityData = async (entityKey: string) => {
    if (!entityKey) return;
    setIsLoading((prev) => !prev);
    setApiResponseState((prevState) => ({
      ...prevState,
      isError: false,
      isSuccess: false,
      message: "",
    }));

    await apiService
      .callAPI(`api/person?person=${entityKey}`, "GET")
      .then((response) => {
        setApiResponseState((prevState) => ({
          ...prevState,
          isSuccess: true,
          isError: false,
          message: "",
          data: response,
        }));
      })
      .catch((error: any) => {
        console.log("📌 ~ fetchEntityData ~ error:", error);
        setApiResponseState((prevState) => ({
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
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Date_Time currentTime={currentTime} />
        <div>
          {Object.values(Person).map((person) => (
            <Button
              key={person}
              handleButtonClick={() =>
                selectedButton === person && isLoading
                  ? null
                  : handleButtonClick(person)
              }
              selectedButton={selectedButton}
              buttonType={person}
            >
              {person}
            </Button>
          ))}
        </div>
      </div>
      <div
        style={{
          height: "400px",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isLoading && <CardSkeleton />}
        {!isLoading && apiResponseState?.isError && (
          <ErrorCard errorMessage={apiResponseState?.message} />
        )}
        {!isLoading &&
          apiResponseState?.isSuccess &&
          apiResponseState?.data && (
            <ProfileCard
              imageSrc={apiResponseState?.data?.profilePictureUrl}
              name={apiResponseState?.data?.name}
              title={apiResponseState?.data?.title}
            />
          )}
      </div>
    </div>
  );
};
export { Content };
