import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

root.render(
	// <Provider>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </Provider>
);
