import Options from "./Options";

export default function Edit({setEditProduct, editProduct}) {
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
						/>
						<label htmlFor="addPrice" className="from-lable">
							Price:
						</label>
						<input
							id="addPrice"
							type="number"
							required={true}
							min={1}
							className="form-control"
							value={editProduct.price}
						/>
						<label htmlFor="addCategory" className="form-label">
							Category:
						</label>
						<select
							className="form-select"
							aria-label="Category"
							id="addCategory"
							value={editProduct.category}
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
						/>
						<div className="d-flex justify-content-end">
							<button className="btn btn-primary mt-3">Edit</button>
							<button
								className="btn btn-secondary mt-3 ms-3"
								onClick={() => setEditProduct({})}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
