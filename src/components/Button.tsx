import {
  FunctionComponent,
  PropsWithChildren,
  MouseEventHandler,
  ReactNode,
} from "react";
import classNames from "classnames";

type ButtonProps = {
  handleButtonClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  selectedButton: string;
  buttonType: string;
};

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  handleButtonClick,
  selectedButton,
  buttonType,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        `px-2 py-1 border border-black bg-white text-black ${selectedButton === buttonType ? "bg-purple-700" : ""}`,
      )}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};
