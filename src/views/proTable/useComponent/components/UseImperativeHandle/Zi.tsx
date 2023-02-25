import { forwardRef, useImperativeHandle, useRef } from 'react';

const Zi = (props: any, ref: any) => {
    console.log(props, ref);
    const inputDom1 = useRef(null);
    const inputDom2 = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            fun: () => {
                console.log(inputDom1.current, inputDom2.current)
            },
            dom: {
                input1: inputDom1.current,
                input2: inputDom2.current,
            }
        }
    }, [])
    return (
        <div>
            <input type="text" ref={inputDom1} />
            <input type="text" ref={inputDom2} />
            {props.children}
        </div>
    )
}

export default forwardRef(Zi)