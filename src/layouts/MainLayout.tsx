import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (btn: string) => {
    setSelectedButton(btn === selectedButton && btn !== "PersonA" ? null : btn);
  };

  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <div className={classNames("flex gap-2")}>
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
    </main>
  );
};
