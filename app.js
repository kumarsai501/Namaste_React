const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "text" }, "Hii i am from nested div"),
        React.createElement("h2", { id: "text" }, "Hii i am from nested second div")]),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "text" }, "Hii i am from nested div"),
        React.createElement("h2", { id: "text" }, "Hii i am from nested second div")])]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);