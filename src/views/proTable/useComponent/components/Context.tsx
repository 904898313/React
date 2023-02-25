import { useContext } from 'react';
import { testContext1, testContext2 } from "@/context/testContext";
export default function () {
    const context1 = useContext(testContext1);
    const context2 = useContext(testContext2);
    console.log(context1, context2);
    return (
        <div>
            <h1>1.createContext 创建上下文 context.Provider标签 声明上下文作用域 value属性声明上下文值</h1>
            <h1>2.useContext(createContext创建的上下文对象) 使用上下文 </h1>
            testContext1 上下文值：{context1}
            <br />
            testContext2 上下文值：{context2}
        </div>
    )
}