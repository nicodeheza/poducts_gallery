import Card from "./Card";
import LoadingCard from "./LoadingCard";

export default function Gallery({
	products,
	setShowDetails,
	setEditProduct,
	setDeleteIndex,
	searchParams
}) {
	function search(ele) {
		let add = true;
		if (searchParams.name) {
			const regEx = new RegExp(searchParams.name, "i");
			if (!regEx.test(ele.name)) add = false;
		}

		if (searchParams.category !== "Any") {
			if (ele.category !== searchParams.category) add = false;
		}

		if (searchParams.minPrice !== 1 || searchParams.maxPrice !== 99999) {
			if (ele.price < searchParams.minPrice || ele.price > searchParams.maxPrice)
				add = false;
		}

		return add;
	}

	return (
		<div className="mt-5">
			<h1 className="text-center">Products</h1>
			<div className="d-flex flex-wrap justify-content-center mt-4 mb-5">
				{products ? (
					products.filter(search).map((product, i) => (
						<div key={i}>
							<Card
								product={product}
								setShowDetails={setShowDetails}
								setEditProduct={setEditProduct}
								productIndex={i}
								setDeleteIndex={setDeleteIndex}
							/>
						</div>
					))
				) : (
					<>
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
						<LoadingCard />
					</>
				)}
			</div>
		</div>
	);
}
