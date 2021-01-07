import React from "react";

import StyledField from "./styled.Field";

interface IPropertys {
  border?: string;
  margin?: string;
  padding?: string;
}

export type IField = IPropertys;

const Field = (props: IField) => {
  return <StyledField {...props}></StyledField>;
};

export default Field;
