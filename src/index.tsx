/// <reference lib="dom" />

import { createRoot } from "react-dom/client";

function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return <h1>Hello World from Pacifist!</h1>;
}

const domNode = document.getElementById("app");
const root = createRoot(domNode!);
root.render(<NavigationBar />);
