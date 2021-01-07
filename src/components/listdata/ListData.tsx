import React from "react";
import { IStudent } from "../../interface/students/IStudent";

interface IListData {
  data: IStudent[];
}

export default function ListData(props: IListData) {
  const { data } = props;
  console.log(data);
  return (
    <div>
      {data.map((element: IStudent) => (
        <li key={element.id}>{element.name}</li>
      ))}
    </div>
  );
}
