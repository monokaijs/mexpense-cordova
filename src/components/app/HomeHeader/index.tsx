import * as React from "react";
import {PropsWithChildren} from "react";

interface HomeHeaderProps extends PropsWithChildren {

}

const HomeHeader = ({children}: HomeHeaderProps) => {
  return (
    <div className={"home-header"}>
      {children}
    </div>
  )
};

export default HomeHeader;
