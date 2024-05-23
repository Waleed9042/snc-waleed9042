import { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = ({ children }) => {
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <div className={classNames("flex gap-2")}>{children}</div>
    </main>
  );
};
