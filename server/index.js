import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.on("open", () => console.log("Connected to Mongoose"));

app.use(
	cors({
		origin: process.env.CLIENT_URL || "http://localhost:3000",
		credentials: true
	})
);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", apiRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
