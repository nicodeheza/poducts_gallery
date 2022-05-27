import Product from "../models/Product";

export default async function createProducts(req, res) {
	try {
		const {name, description, price, imageUrl} = req.body;
		const newProduct = new Product({
			name,
			description,
			price,
			imageUrl
		});
		const saveProduct = await newProduct.save();
		res.status(200).json(saveProduct);
	} catch (error) {
		console.log(error);
		res.status(500).json({error});
	}
}
