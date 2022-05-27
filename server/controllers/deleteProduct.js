import Product from "../models/Product";

export default async function deleteProduct(req, res) {
	try {
		const productId = req.body._id;

		await Product.findByIdAndDelete(productId);

		res.status(400).json({message: "product deleted successfully"});
	} catch (error) {
		console.log(error);
		res.status(500).json({error});
	}
}
