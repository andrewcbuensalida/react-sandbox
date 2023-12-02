import React, { memo } from "react";

type ChildCallbackPropsType = {
	myCallback: () => void;
};

function ChildCallback({ myCallback }: ChildCallbackPropsType) {
	console.log("in childcallback");
	return (
		<div>
			<h1>ChildCallback</h1>
		</div>
	);
}

// need memo for useCallback to work
export default memo(ChildCallback);
