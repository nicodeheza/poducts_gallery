import Product from "../models/Product.js";

export default async function getProducts(req, res) {
	//Podria filtrar los productos aca pero en el pdf el
	//filtrado esta en la seccion de front-end por lo que
	//lo hare ahi.
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (err) {
		console.log(err);
		res.status(500).json({error: err});
	}
}
