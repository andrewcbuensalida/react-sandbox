import React, { memo, useCallback } from "react";
import ChildCallback from "./ChildCallback";

function MyCallback({children}:any) {
	// console.log("in callback");

	// this rerenders the ChildCallback when theme is changed
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
      {children}
		</section>
	);
}

export default MyCallback;
