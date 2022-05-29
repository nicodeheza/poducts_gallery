export default function Add() {
	return (
		<div className="accordion mt-4">
			<div className="accordion-item">
				<h3 className="accordion-header" id="heading">
					<button
						className="accordion-button collapsed bg-primary text-white"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapse"
						aria-expanded="false"
						aria-controls="collapse"
					>
						Add Product
					</button>
				</h3>
				<div
					id="collapse"
					className="accordion-collapse collapse"
					aria-labelledby="heading"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						<form>
							<label htmlFor="addName" className="from-lable">
								Name:
							</label>
							<input id="addName" type="text" required={true} className="form-control" />
							<label htmlFor="addImage" className="from-lable">
								Image Url:
							</label>
							<input id="addImage" type="text" required={true} className="form-control" />
							<label htmlFor="addPrice" className="from-lable">
								Price:
							</label>
							<input
								id="addImage"
								type="number"
								required={true}
								min={1}
								className="form-control"
							/>
							<label htmlFor="addCategory" className="form-label">
								Category:
							</label>
							<select className="form-select" aria-label="Category" id="addCategory">
								<option defaultValue>Any</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
							<label htmlFor="addDescription" className="from-lable">
								Description:
							</label>
							<textarea
								id="addDescription"
								type="number"
								required={true}
								className="form-control"
							/>
							<div className="d-flex justify-content-end">
								<button className="btn btn-primary mt-3">Add</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
