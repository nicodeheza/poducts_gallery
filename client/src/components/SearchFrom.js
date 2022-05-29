import {useState} from "react";
import Options from "./Options";

const fromInitialState = {
	name: "",
	category: "Any",
	minPrice: 1,
	maxPrice: 99999
};

export default function SearchForm({setSearchParams}) {
	const [formData, setFormData] = useState(fromInitialState);
	return (
		<form className="mt-4 col-lg-6 px-2 mx-auto">
			<div>
				<label htmlFor="productName" className="form-label">
					Name:
				</label>
				<input
					type="text"
					id="productName"
					className="form-control"
					value={formData.name}
					onChange={(e) => setFormData({...formData, name: e.target.value})}
				/>
			</div>
			<div>
				<label htmlFor="productCategory" className="form-label">
					Category:
				</label>
				<select
					className="form-select"
					aria-label="Category"
					id="productCategory"
					value={formData.category}
					onChange={(e) => setFormData({...formData, category: e.target.value})}
				>
					<Options />
				</select>
			</div>
			<div className="row">
				<div className="col">
					<label htmlFor="min-price" className="form-label">
						Min-Price:
					</label>
					<div className="col input-group">
						<span className="input-group-text">$</span>
						<input
							type="number"
							id="min-price"
							min={1}
							className="form-control"
							value={formData.minPrice}
							onChange={(e) => setFormData({...formData, minPrice: e.target.value})}
						/>
					</div>
				</div>
				<div className="col">
					<label htmlFor="max-price" className="form-label">
						Max-Price:
					</label>
					<div className="col input-group">
						<span className="input-group-text">$</span>
						<input
							type="number"
							id="max-price"
							min={1}
							className="form-control"
							value={formData.maxPrice}
							onChange={(e) => setFormData({...formData, maxPrice: e.target.value})}
						/>
					</div>
				</div>
			</div>
			<div className="d-flex flex-row-reverse">
				<button
					type="button"
					className="btn btn-secondary mt-3 ms-3"
					onClick={() => {
						setSearchParams(fromInitialState);
						setFormData(fromInitialState);
					}}
				>
					Reset
				</button>
				<button
					type="button"
					className="btn btn-primary mt-3"
					onClick={() => setSearchParams(formData)}
				>
					Search
				</button>
			</div>
		</form>
	);
}
