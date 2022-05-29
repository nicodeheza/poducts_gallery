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
	const [deleteIndex, setDeleteIndex] = useState(null);
	const [searchParams, setSearchParams] = useState({
		name: "",
		category: "Any",
		minPrice: 1,
		maxPrice: 99999
	});

	//get products
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

	//delete product
	useEffect(() => {
		if (deleteIndex !== null) {
			const productId = products[deleteIndex]._id;
			fetch(`${API_URL}/delete/${productId}`, {
				method: "DELETE",
				credentials: "include"
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.message === "product deleted successfully") {
						setProducts((prev) => {
							const newProducts = [...prev];
							newProducts.splice(deleteIndex, 1);
							return newProducts;
						});
						setDeleteIndex(null);
					} else {
						setDeleteIndex(null);
					}
				})
				.catch((err) => {
					console.log(err);
					setDeleteIndex(null);
				});
		}
	}, [deleteIndex, products]);

	return (
		<div className="container">
			<Accordion setProducts={setProducts} setSearchParams={setSearchParams} />
			<Gallery
				products={products}
				setShowDetails={setShowDetails}
				setEditProduct={setEditProduct}
				setDeleteIndex={setDeleteIndex}
				searchParams={searchParams}
			/>
			{showDetails.name ? (
				<Details
					product={showDetails}
					setShowDetails={setShowDetails}
					setEditProduct={setEditProduct}
					setDeleteIndex={setDeleteIndex}
				/>
			) : null}
			{!showDetails.name && editProduct.name !== undefined ? (
				<Edit
					setEditProduct={setEditProduct}
					editProduct={editProduct}
					setProducts={setProducts}
				/>
			) : null}
		</div>
	);
}

export default App;
