import Gallery from "./components/Gallery";
import {useState, useEffect} from "react";
import {API_URL} from "./constants/constants";
import Details from "./components/Details";
import Accordion from "./components/Accordion";
import Edit from "./components/Edit";

function App() {
	const [products, setProducts] = useState([]);
	const [showDetails, setShowDetails] = useState({});
	const [editProduct, setEditProduct] = useState({});

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
			<Gallery
				products={products}
				setShowDetails={setShowDetails}
				setEditProduct={setEditProduct}
			/>
			{showDetails.name ? (
				<Details product={showDetails} setShowDetails={setShowDetails} />
			) : null}
			{!showDetails.name && editProduct.name !== undefined ? (
				<Edit setEditProduct={setEditProduct} editProduct={editProduct} />
			) : null}
		</div>
	);
}

export default App;
