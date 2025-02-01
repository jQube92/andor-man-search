import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "primeflex/primeflex.css";
import "./index.css";
import App from "./App.tsx";
import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrimeReactProvider>
			<BrowserRouter basename="/">
				<App />
			</BrowserRouter>
		</PrimeReactProvider>
	</StrictMode>
);
