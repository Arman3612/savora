import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello react"
);

console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "i am a h1 tag"),
    React.createElement("h1", { key: "h1-2" }, "i am a h2 tag"),
  ]),

  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-3" }, "i am a h1 tag"),
    React.createElement("h1", { key: "h1-4" }, "i am a h2 tag"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);