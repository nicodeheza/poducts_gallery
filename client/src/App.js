import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchFrom";
import {useState, useEffect} from "react";
import {API_URL} from "./constants/constants";

function App() {
	const [products, setProducts] = useState([]);

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
			<Gallery />
		</div>
	);
}

export default App;
