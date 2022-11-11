import * as React from "react";
import {Icon} from "framework7-react";

interface FABProps {
  icon: string;
  onClick?: (e: any) => void;
}

export const FAB = ({icon, onClick}: FABProps) => {
  return (
    <a className={'app-fab'} onClick={onClick}>
      <Icon material={icon} size={'24pt'}/>
    </a>
  )
}
