import Product from "../models/Product.js";

export default async function deleteProduct(req, res) {
	try {
		const productId = req.params.id;

		await Product.findByIdAndDelete(productId);

		res.status(200).json({message: "product deleted successfully"});
	} catch (error) {
		console.log(error);
		res.status(500).json({error});
	}
}
