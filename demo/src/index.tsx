import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// @ts-ignore
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
