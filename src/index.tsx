import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./state/ThemeContextProvider";
import NotApp from "./NotApp";
import StarshipsContextProvider from "./state/StarshipsContextProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<StarshipsContextProvider>
		<ThemeContextProvider>
			<NotApp />
			<App />
		</ThemeContextProvider>
	</StarshipsContextProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
