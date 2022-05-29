export default function Card() {
	return (
		<div className="card my-3 mx-3" style={{width: "250px"}} aria-hidden="true">
			<div
				className="card-img-top  placeholder-glow"
				style={{objectFit: "cover", width: "100%", height: "200px"}}
			>
				<span className="placeholder " style={{width: "100%", height: "200px"}}></span>
			</div>

			<div className="card-body" style={{maxHeight: "fit-content"}}>
				<h5 className="card-title placeholder-glow">
					<span className="placeholder col-6"></span>
				</h5>
				<p className="card-text placeholder-glow">
					<span className="placeholder col-4"></span>
				</p>
				<p className="card-text fw-bold placeholder-glow">
					<span className="placeholder col-4"></span>
				</p>
				<div className="d-flex justify-content-between flex-wrap">
					<button
						className="btn btn-primary my-2 disabled placeholder col-3"
						tabIndex="-1"
					></button>
					<button
						className="btn btn-secondary my-2 disabled placeholder col-3"
						tabIndex="-1"
					></button>
					<button
						className="btn btn-danger my-2 disabled placeholder col-3"
						tabIndex="-1"
					></button>
				</div>
				<p className="card-text fw-lighter placeholder-glow" style={{fontSize: "13px"}}>
					<span className="placeholder col-7"></span>
				</p>
			</div>
		</div>
	);
}
