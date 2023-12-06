import React, { memo, useEffect, useState } from "react";

type ChildCallbackPropsType = {
	myCallback: () => void;
};

function ChildCallback({ myCallback }: ChildCallbackPropsType) {
	const [message, setMessage] = useState("Loading child..");
	// console.log("in childcallback");

  // simulates a long api call
	useEffect(() => {
		// console.log("in useeffect in child callback");
		setMessage("Loading child.....");
		setTimeout(() => {
			setMessage("Done loading child");
		}, 3000);
	}, [myCallback]);

	// setTimeout(() => {

	// }, 3000);
	return (
		<div>
			<h1>{message}</h1>
		</div>
	);
}

// need memo for useCallback to work
export default memo(ChildCallback);
