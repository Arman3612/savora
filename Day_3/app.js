import React from "react";
import ReactDOM from "react-dom/client";

// const jsxHeading = <h1>Hello React 🚀</h1>;
const jsxHeading = (
<h1 className="head" tabIndex={5}>Hello React 🚀</h1>
);
const Heading =()=><h1>Hello world</h1>;
const Title=()=>(
  <h1>Hello react</h1>
)
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
const hululu=(
  <div id="ok">
    <h1 className="yu">Hellothis is react element</h1>
  </div>
)
const Sd=()=>(
  <h1>Hello this is cimponent 1</h1>
)
const Ij=()=>(
  <h1>Hello this is component 2</h1>
)
const Ih=()=><h1>Hello this is component 3</h1>
const HeadingComponent= ()=>(
  <div id ="cintunues">
    <Title/> 
    {hululu}
    <Sd></Sd>
    {Ij()}
    {<Ih/>}
    <h2>{100+200}</h2>
    <h1 className="heading">Hello Arnan what's up</h1>
  </div>
)
root.render(<HeadingComponent/>);