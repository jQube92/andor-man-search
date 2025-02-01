import "primeicons/primeicons.css";
import {Navigate, Route, Routes} from "react-router";
import ManEntryList from "./components/list/ManEntryList";
import ManEntryDetails from "./components/details";

function App() {
	return (
		<Routes>
			<Route path="/andor-man-search" element={<Navigate to={"/andor-man-search/manual-entries"} />} />
			<Route path="/andor-man-search/manual-entries" element={<ManEntryList />} />
			<Route path="/andor-man-search/manual-entries/:entryId" element={<ManEntryDetails />} />
		</Routes>
	);
}
export default App;
