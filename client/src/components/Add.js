import {useEffect, useState} from "react";
import {API_URL} from "../constants/constants";
import Options from "./Options";

export default function Add({setProducts}) {
	const [productToAdd, setProductToAdd] = useState({
		name: "",
		description: "",
		price: 1,
		category: "Any",
		imageUrl: ""
	});
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage("");
	}, [productToAdd]);

	function addProduct(e) {
		e.preventDefault();
		if (
			productToAdd.name &&
			productToAdd.description &&
			productToAdd.price &&
			productToAdd.category !== "Any" &&
			productToAdd.imageUrl
		) {
			fetch(`${API_URL}/add`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(productToAdd)
			})
				.then((res) => res.json())
				.then((data) => {
					setProducts((prev) => [data, ...prev]);
					setProductToAdd({
						name: "",
						description: "",
						price: 1,
						category: "Any",
						imageUrl: ""
					});
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			setMessage("All fields are required");
		}
	}

	return (
		<form>
			<label htmlFor="addName" className="from-lable">
				Name:
			</label>
			<input
				id="addName"
				type="text"
				required={true}
				className="form-control"
				value={productToAdd.name}
				onChange={(e) => setProductToAdd({...productToAdd, name: e.target.value})}
			/>
			<label htmlFor="addImage" className="from-lable">
				Image Url:
			</label>
			<input
				id="addImage"
				type="text"
				required={true}
				className="form-control"
				value={productToAdd.imageUrl}
				onChange={(e) => setProductToAdd({...productToAdd, imageUrl: e.target.value})}
			/>
			<label htmlFor="addPrice" className="from-lable">
				Price:
			</label>
			<div className="input-group">
				<span className="input-group-text">$</span>
				<input
					id="addPrice"
					type="number"
					required={true}
					min={1}
					className="form-control"
					value={productToAdd.price}
					onChange={(e) => setProductToAdd({...productToAdd, price: e.target.value})}
				/>
			</div>
			<label htmlFor="addCategory" className="form-label">
				Category:
			</label>
			<select
				className="form-select"
				aria-label="Category"
				id="addCategory"
				value={productToAdd.category}
				onChange={(e) => setProductToAdd({...productToAdd, category: e.target.value})}
			>
				<Options />
			</select>
			<label htmlFor="addDescription" className="from-lable">
				Description:
			</label>
			<textarea
				id="addDescription"
				type="number"
				required={true}
				className="form-control"
				value={productToAdd.description}
				onChange={(e) => setProductToAdd({...productToAdd, description: e.target.value})}
			/>
			<div className="d-flex justify-content-end">
				<button className="btn btn-primary mt-3" onClick={(e) => addProduct(e)}>
					Add
				</button>
			</div>
			<p className="text-danger text-center">{message}</p>
		</form>
	);
}
