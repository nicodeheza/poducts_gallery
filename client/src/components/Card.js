export default function Card({product}) {
	return (
		<div className="card my-3 mx-3" style={{width: "250px"}}>
			<img
				src={product.imageUrl}
				className="card-img-top"
				alt={product.name}
				width="200px"
				height="200px"
				style={{objectFit: "cover"}}
			/>

			<div className="card-body" style={{maxHeight: "fit-content"}}>
				<h5 className="card-title">{product.name}</h5>
				<p className="card-text">{product.category}</p>
				<p className="card-text fw-bold">{product.price}$</p>
				<div className="d-flex justify-content-between flex-wrap">
					<button className="btn btn-primary my-2">Details</button>
					<button className="btn btn-secondary my-2">Edit</button>
					<button className="btn btn-danger my-2">Delete</button>
				</div>
				<p className="card-text fw-lighter" style={{fontSize: "13px"}}>
					id: {product._id}$
				</p>
			</div>
		</div>
	);
}
