import React, { useRef, useState } from "react";

function MyRef({theme}:any) {
	const [name, setName] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

  // console.log('in my ref');
  
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
      Current theme is {theme}
		</section>
	);
}

export default MyRef;
