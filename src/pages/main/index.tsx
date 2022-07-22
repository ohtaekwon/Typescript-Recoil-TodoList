import React from "react";
import { useRecoilValue } from "recoil";
import Calendar from "../../components/Calendar";
import { TodoItemQuery } from "../../state";

export default function MainPage() {
  const data = useRecoilValue(TodoItemQuery);
  console.log(data);
  return (
    <>
      <h1>여기는 메인 페이지입니다.</h1>
      <div>{data.title}</div>
      <Calendar />
    </>
  );
}
