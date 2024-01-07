import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/index.js";

import "./styles/index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
