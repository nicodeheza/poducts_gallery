import Options from "./Options";
import {useEffect, useState} from "react";
import {API_URL} from "../constants/constants";

export default function Edit({setEditProduct, editProduct, setProducts}) {
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage("");
	}, [editProduct]);

	function submitEditProduct(e) {
		e.preventDefault();
		if (
			editProduct.name &&
			editProduct.imageUrl &&
			editProduct.price &&
			editProduct.category !== "Any" &&
			editProduct.description
		) {
			fetch(`${API_URL}/update`, {
				method: "PUT",
				credentials: "include",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					_id: editProduct._id,
					name: editProduct.name,
					imageUrl: editProduct.imageUrl,
					price: editProduct.price,
					category: editProduct.category,
					description: editProduct.description
				})
			})
				.then((res) => res.json())
				.then((data) => {
					setProducts((prev) => {
						const newProducts = [...prev];
						newProducts[editProduct.index] = data;
						return newProducts;
					});
					setEditProduct({});
				})
				.catch((err) => console.log(err));
		} else {
			setMessage("All fields are required");
		}
	}
	return (
		<div
			className="d-flex justify-content-center align-items-center fixed-top"
			style={{width: "100wv", height: "100vh"}}
		>
			<div className="card" style={{width: "90%"}}>
				<div className="card-body">
					<form>
						<label htmlFor="addName" className="from-lable">
							Name:
						</label>
						<input
							id="addName"
							type="text"
							required={true}
							className="form-control"
							value={editProduct.name}
							onChange={(e) => setEditProduct({...editProduct, name: e.target.value})}
						/>
						<label htmlFor="addImage" className="from-lable">
							Image Url:
						</label>
						<input
							id="addImage"
							type="text"
							required={true}
							className="form-control"
							value={editProduct.imageUrl}
							onChange={(e) => setEditProduct({...editProduct, imageUrl: e.target.value})}
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
								value={editProduct.price}
								onChange={(e) =>
									setEditProduct({...editProduct, price: parseFloat(e.target.value)})
								}
							/>
						</div>
						<label htmlFor="addCategory" className="form-label">
							Category:
						</label>
						<select
							className="form-select"
							aria-label="Category"
							id="addCategory"
							value={editProduct.category}
							onChange={(e) => setEditProduct({...editProduct, category: e.target.value})}
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
							value={editProduct.description}
							onChange={(e) =>
								setEditProduct({...editProduct, description: e.target.value})
							}
						/>
						<div className="d-flex justify-content-end">
							<button
								className="btn btn-primary mt-3"
								onClick={(e) => submitEditProduct(e)}
							>
								Edit
							</button>
							<button
								className="btn btn-secondary mt-3 ms-3"
								onClick={() => setEditProduct({})}
							>
								Cancel
							</button>
						</div>
						<p className="text-danger text-center">{message}</p>
					</form>
				</div>
			</div>
		</div>
	);
}
