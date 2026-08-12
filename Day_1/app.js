const heading=React.createElement("h1",{id:"heading"},"hello react");
console.log(heading);//object
//const root =ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);//object to heading tag
const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id: "child"},
    [React.createElement("h1",{},"i am a h1 tag"),
    React.createElement("h1",{},"i am a h2 tag"),
]),
    React.createElement("div",{id: "child2"},
    [React.createElement("h1",{},"i am a h1 tag"),
    React.createElement("h1",{},"i am a h2 tag"),
])
])
 const rot=ReactDOM.createRoot(document.getElementById("root"));
rot.render(parent);
// rot.render(heading);