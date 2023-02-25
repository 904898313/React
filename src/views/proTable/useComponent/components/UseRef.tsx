import React, { useState, useRef, useEffect } from "react";

const UseRef: React.FC = () => {
	let [num, setNum] = useState(0);
	const refValue = useRef(null);
	function add() {
		setNum((num) => num + 1)
	}
	useEffect(() => {
		console.log(refValue, 'refValue')
	}, [num])
	return (
		<div>
			<p ref={refValue}></p>
			{num}
			<button onClick={add}>++</button>
		</div>
	)
}

export default UseRef;
