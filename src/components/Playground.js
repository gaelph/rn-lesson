import React from "react";
import Playground from "javascript-playgrounds";

export default function CustomPlayground(props) {
  const { noPlayer, width, height } = props;
  let panes = [
    "editor",
    {
      type: "player",
      scale: 0.8,
      width: 300,
    },
  ];

  if (noPlayer) {
    panes = ["editor"];
  }

  return (
    <Playground
      style={{
        with: width || 800,
        height: height || 600,
        marginTop: 16,
        marginBottom: 16,
      }}
      preset="react-native"
      panes={panes}
      {...props}
    />
  );
}
