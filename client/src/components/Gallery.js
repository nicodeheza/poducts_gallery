import Card from "./Card";

export default function Gallery({products}) {
	return (
		<div className="d-flex flex-wrap justify-content-center mt-5 mb-5">
			{/* <Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card /> */}
			{products && products.length > 0
				? products.map((product) => <Card product={product} />)
				: null}
		</div>
	);
}
