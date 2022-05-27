import {Router} from "express";
import createProduct from "../controllers/createProduct.js";
import deleteProduct from "../controllers/deleteProduct.js";
import editProduct from "../controllers/editProduct.js";
import getProducts from "../controllers/getProducts.js";

const router = Router();

router.get("/", getProducts);
router.post("/add", createProduct);
router.put("/update", editProduct);
router.delete("/delete", deleteProduct);

export default router;
