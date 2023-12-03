import React, { memo, useCallback } from "react";
import ChildCallback from "./ChildCallback";

function MyCallback() {
	console.log("in callback");

	// this rerenders the ChildCallback
	// const myCallback = () => {
	// 	console.log("in inner callback");
	// };

	// this doesn't rerender the ChildCallback
	const myCallback = useCallback(() => {
		console.log("in inner callback");
	}, []);

	return (
		<section>
			<h1>in callback</h1>
			<ChildCallback myCallback={myCallback} />
		</section>
	);
}

export default MyCallback;
