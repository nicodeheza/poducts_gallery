import Add from "./Add";
import SearchForm from "./SearchFrom";

export default function Accordion() {
	return (
		<div className="accordion mt-5" id="accordion">
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingOne">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						Search
					</button>
				</h2>
				<div
					id="collapseOne"
					className="accordion-collapse collapse show"
					aria-labelledby="headingOne"
					data-bs-parent="#accordion"
				>
					<div className="accordion-body">
						<SearchForm />
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingTwo">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						Add Product
					</button>
				</h2>
				<div
					id="collapseTwo"
					className="accordion-collapse collapse"
					aria-labelledby="headingTwo"
					data-bs-parent="#accordion"
				>
					<div className="accordion-body">
						<Add />
					</div>
				</div>
			</div>
		</div>
	);
}
