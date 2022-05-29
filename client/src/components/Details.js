export default function Details({product, setShowDetails}) {
	return (
		<div
			className="d-flex justify-content-center align-items-center fixed-top"
			style={{width: "100wv", height: "100vh"}}
		>
			<div
				className="card my-3 mx-3"
				style={{width: "90%", maxWidth: "600px", maxHeight: "100vh", overflow: "auto"}}
			>
				<img
					src={product.imageUrl}
					className="card-img-top"
					alt={product.name}
					width="600px"
					height="300px"
					style={{objectFit: "contain"}}
				/>

				<div className="card-body" style={{maxHeight: "fit-content"}}>
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">{product.category}</p>
					<p className="card-text">{product.description}</p>
					<p className="card-text fw-bold">{product.price}$</p>
					<div className="d-flex justify-content-between flex-wrap">
						<button className="btn btn-primary my-2" onClick={() => setShowDetails({})}>
							Close
						</button>
						<button className="btn btn-secondary my-2">Edit</button>
						<button className="btn btn-danger my-2">Delete</button>
					</div>
					<p className="card-text fw-lighter" style={{fontSize: "13px"}}>
						id: {product._id}$
					</p>
				</div>
			</div>
		</div>
	);
}
