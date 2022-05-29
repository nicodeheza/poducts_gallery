export default function SearchForm() {
	return (
		<form className="mt-4 col-lg-6 px-2 mx-auto">
			<h2>Search Product</h2>
			<div>
				<label htmlFor="productName" className="form-label">
					Name:
				</label>
				<input type="text" id="productName" className="form-control" />
			</div>
			<div>
				<label htmlFor="productCategory" className="form-label">
					Category:
				</label>
				<select className="form-select" aria-label="Category" id="productCategory">
					<option defaultValue>Any</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
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
							value={100}
							min={1}
							className="form-control"
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
							value={200}
							min={1}
							className="form-control"
						/>
					</div>
				</div>
			</div>
			<div className="d-flex flex-row-reverse">
				<button type="button" className="btn btn-secondary mt-3 ms-3">
					Reset
				</button>
				<button type="button" className="btn btn-primary mt-3">
					Search
				</button>
			</div>
		</form>
	);
}
