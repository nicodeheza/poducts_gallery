import Product from "../models/Product.js";

export default async function editProduct(req, res) {
	try {
		const {_id, name, description, price, imageUrl} = req.body;
		const updatedProduct = await Product.findByIdAndUpdate(_id, {
			name,
			description,
			price,
			imageUrl
		});
		res.status(400).json(updatedProduct);
	} catch (error) {
		console.log(error);
		res.status(500).json({error});
	}
}
