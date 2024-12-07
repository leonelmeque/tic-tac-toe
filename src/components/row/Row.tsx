import "./Row.css";
import React from "react";

export type RowProps = {
  children?: React.ReactNode;
};

export default function Row({children}: RowProps) {
  return <div className="row">{children}</div>;
}

Row.displayName = 'Row'
