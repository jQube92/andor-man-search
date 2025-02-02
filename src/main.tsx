import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "primeflex/primeflex.css";
import "./index.css";
import {PrimeReactProvider} from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {HashRouter, Navigate, Route, Routes} from "react-router";
import ManEntryList from "./components/list/ManEntryList.tsx";
import ManEntryDetailsWrapper from "./components/details/ManEntryDetailsWrapper.tsx";
import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrimeReactProvider>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/manual-entries" />} />
					<Route path="/manual-entries" element={<ManEntryList />} />
					<Route path="/manual-entries/:entryId" element={<ManEntryDetailsWrapper />} />
				</Routes>
			</HashRouter>
		</PrimeReactProvider>
	</StrictMode>
);
