import "primeicons/primeicons.css";
import {Link} from "react-router";

function App() {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/page1">Page 1</Link>
			<Link to="/page2">Page 2</Link>
		</nav>
	);
	// return (
	// 	<Routes>
	// 		<Route path="/andor-man-search/#/manual-entries" element={<Navigate to={"/andor-man-search/#/manual-entries"} />} />
	// 		<Route path="/andor-man-search/#/manual-entries" element={<ManEntryList />} />
	// 		<Route path="/manual-entries/:entryId" element={<ManEntryDetails />} />
	// 		<Route path="*" element={<div>not-found </div>} />
	// 	</Routes>
	// );
}
export default App;
