import { useRef, useEffect } from 'react';
import Zi from './Zi'

const Fu = () => {
    const inputElement = useRef(null);
    function focusHandler() {
        inputElement.current.focus();
    }

    useEffect(() => {
        focusHandler();
    }, [])

    return (
        <div>
            <p>DOM加载完毕默认让子组件input聚焦</p>
            <Zi num={10} ref={inputElement}></Zi>
            <button onClick={focusHandler}>点击让子组件input聚焦</button>
        </div>
    )
}

export default Fu