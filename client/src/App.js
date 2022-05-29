import Gallery from "./components/Gallery";
import {useState, useEffect} from "react";
import {API_URL} from "./constants/constants";
import Details from "./components/Details";
import Accordion from "./components/Accordion";

function App() {
	const [products, setProducts] = useState([]);
	const [showDetails, setShowDetails] = useState({});

	useEffect(() => {
		fetch(`${API_URL}/`, {
			credentials: "include"
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container">
			<Accordion />
			<Gallery products={products} setShowDetails={setShowDetails} />
			{showDetails.name ? (
				<Details product={showDetails} setShowDetails={setShowDetails} />
			) : null}
		</div>
	);
}

export default App;
