import { useEffect, useState } from "react"
import { Button } from "antd"
export default function () {
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log('1-初始化执行，可用于页面加载完成后的代码执行');
    }, [])
    useEffect(() => {
        console.log('2-状态变更后的执行，可用于监听数据的变化 & 性能优化,节省非必要的声明');
        return () => {
            console.log('3-组件卸载时执行，可用于清除计时器等操作');
        }
    }, [num])
    return (
        <div>
            {num}
            <Button onClick={() => setNum((num) => num + 1)}>+</Button>
        </div>
    )
}