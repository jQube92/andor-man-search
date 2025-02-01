import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "primeflex/primeflex.css";
import "./index.css";
import App from "./App.tsx";
import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {HashRouter, Route, Routes} from "react-router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrimeReactProvider>
			<HashRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/page1" element={<div>page2</div>} />
					<Route path="/page2" element={<div>page2</div>} />
				</Routes>
			</HashRouter>
		</PrimeReactProvider>
	</StrictMode>
);
