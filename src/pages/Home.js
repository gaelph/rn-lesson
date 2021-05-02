import React from "react";
import BottomButtons from "../components/BottomButtons";

export default function Home(_props) {
  return (
    <div className="w-full">
      <h1>Vite, React-Native&nbsp;!</h1>

      <BottomButtons
        backTo="/"
        backLabel="Vite, React Native"
        nextTo="/environment"
        nextLabel="Environment"
      />
    </div>
  );
}
