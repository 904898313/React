import { useState } from "react";
import UseEffectTest from "./components/UseEffectTest";
import UseTransition from "./components/UseTransition";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";
import Context from "./components/Context";
import UseImperativeHandle from "./components/UseImperativeHandle/UseImperativeHandle";
import Fu from "./components/forwardRef/Fu";
import { Button } from "antd";
import "./index.less";

const UseComponent = () => {

	const typeList = ['useState', 'useEffect', 'UseRef', 'forwardRef', 'useImperativeHandle', 'Context', 'UseTransition'];
	const [type, setType] = useState('');

	return (
		<div className="card content-box">
			<span className="text">test Hooks 🍓🍇🍈🍉</span>
			<div>
				{
					typeList.map((item) => {
						return <Button onClick={() => setType(item)} key={item}>{item}</Button>
					})
				}
			</div>
			{type == 'useState' && <UseState />}
			{type == 'useEffect' && <UseEffectTest />}
			{type == 'UseRef' && <UseRef />}
			{type == 'forwardRef' && <Fu />}
			{type == 'useImperativeHandle' && <UseImperativeHandle />}
			{type == 'Context' && <Context />}
			{type == 'UseTransition' && <UseTransition />}
		</div>
	);

};

export default UseComponent;
