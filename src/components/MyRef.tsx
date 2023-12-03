import React, { useRef, useState } from "react";

function MyRef() {
	const [name, setName] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<section>
			<button
				onClick={() => inputRef.current && inputRef.current.focus()}
			>
				Focus on input
			</button>
			<input
				ref={inputRef}
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</section>
	);
}

export default MyRef;
