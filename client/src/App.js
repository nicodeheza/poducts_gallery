import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchFrom";
import {useState, useEffect} from "react";
import {API_URL} from "./constants/constants";
import Details from "./components/Details";

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
			<SearchForm />
			<div>
				<button className="btn btn-primary mt-5" style={{width: "100%"}}>
					Add Product
				</button>
			</div>
			<Gallery products={products} setShowDetails={setShowDetails} />
			{showDetails.name ? (
				<Details product={showDetails} setShowDetails={setShowDetails} />
			) : null}
		</div>
	);
}

export default App;
