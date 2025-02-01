import "primeicons/primeicons.css";
import {Navigate, Route, Routes} from "react-router";
import ManEntryList from "./components/list/ManEntryList";
import ManEntryDetails from "./components/details";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={"/manual-entries"} />} />
			<Route path="/manual-entries" element={<ManEntryList />} />
			<Route path="/manual-entries/:entryId" element={<ManEntryDetails />} />
		</Routes>
	);
}
export default App;
