import React, { memo, useCallback } from "react";
import ChildCallback from "./ChildCallback";

function MyCallback() {
	console.log("in callback");
	const myCallback = useCallback(() => {
		console.log("in inner callback");
	}, []);

	// this rerenders the ChildCallback
	// const myCallback = ()=>{
	//   console.log("in inner callback");

	// }

	return (
		<div>
			<h1>in callback</h1>
			<ChildCallback myCallback={myCallback} />
		</div>
	);
}

export default MyCallback;
