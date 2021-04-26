import React from "react";
import { Link } from "react-router-dom";

export default function BottomButtons({
	backTo,
	backLabel,
	nextTo,
	nextLabel,
}) {
	return (
		<div className="w-full flex justify-between pt-8">
			<Link to={backTo} className="button back">
				{backLabel}
			</Link>
			<Link to={nextTo} className="button next">
				{nextLabel}
			</Link>
		</div>
	);
}
