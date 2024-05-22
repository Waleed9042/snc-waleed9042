import React, {
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
        "px-4 py-2 mx-3 border border-black text-black rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
        {
          "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500":
            selectedButton === buttonType,
          "bg-white hover:bg-gray-100 focus:ring-gray-500":
            selectedButton !== buttonType,
        },
      )}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};
