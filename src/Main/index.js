import React, { useState } from "react";
import "./materialize.min.css";
import "./mycounter.css";

export default function Main() {
	const [count, setCount] = useState(0);

	return (
		<div className="container">
			<div className="row">
				<div className="col s12 center">
					<h1 className="count">{count}</h1>
					<button
						className="btn ml-2"
						onClick={() => setCount(count > 0 ? count - 1 : 0)}
					>
						-
					</button>
					<button className="btn ml-2" onClick={() => setCount(0)}>
						Zerar
					</button>
					<button className="btn ml-2" onClick={() => setCount(count + 1)}>
						+
					</button>
				</div>
				<div className="col s12 center">
					<p>By: Marcos Mamede</p>
					<p>
						<b>IGTI</b> MBA Fullstack Develop
					</p>
				</div>
			</div>
		</div>
	);
}
