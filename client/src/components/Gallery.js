import Card from "./Card";

export default function Gallery({products, setShowDetails, setEditProduct}) {
	return (
		<div className="mt-5">
			<h1 className="text-center">Products</h1>
			<div className="d-flex flex-wrap justify-content-center mt-4 mb-5">
				{products && products.length > 0
					? products.map((product, i) => (
							<div key={i}>
								<Card
									product={product}
									setShowDetails={setShowDetails}
									setEditProduct={setEditProduct}
									productIndex={i}
								/>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
}
