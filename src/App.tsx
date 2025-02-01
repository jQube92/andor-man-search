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
}
export default App;
