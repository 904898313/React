import { useRef, useEffect } from 'react';
import Zi from './Zi'

const Fu = () => {
    const inputElement = useRef(null);
    function focusHandler() {
        console.log(inputElement.current);
    }

    useEffect(() => {
        focusHandler();
    }, [])

    return (
        <div>
            <p>useImperativeHandle功能：自定义修改父组件传入的ref.current属性，并且具有缓存功能[]</p>
            <Zi num={10} ref={inputElement}>
                <p>123</p>
                <p>234</p>
            </Zi>
            <button onClick={focusHandler}>点击输出子组件修改后的ref.current</button>
        </div>
    )
}

export default Fu