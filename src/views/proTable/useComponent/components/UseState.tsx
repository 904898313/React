import React, { useState } from "react";
const Home: React.FC = () => {
    const [obj, setObj] = useState({ a: 1, b: 2 });
    const [arr, setArr] = useState<Array<number>>([1, 2, 3]);
    function sortFun() {
        let copyArr = [...arr];
        copyArr.sort((a, b) => {
            return a - b
        });
        setArr(copyArr);
    }
    return (
        <div style={{ display: "flex" }}>
            <div>
                修改对象：
                <h1>obj.a:{obj.a}</h1>
                <h1>obj.b:{obj.b}</h1>
                <button onClick={() => setObj({ ...obj, a: obj.a + 1, b: obj.b + 1 })}>++</button>
            </div>
            <div>
                修改数组：
                <h1>arr:{arr}</h1>
                <button onClick={() => setArr([arr.length, ...arr])}>头添 [x, ...arr]</button><br />
                <button onClick={() => setArr([...arr, arr.length])}>尾添 [...arr, x]</button><br />
                <button onClick={() => setArr(arr.slice(1))}>头删 slice</button><br />
                <button onClick={() => setArr(arr.slice(0, arr.length - 1))}>尾删 slice</button><br />
                <button onClick={() => setArr(arr.map((item) => item as number * 2))}>整体运算*2 map</button><br />
                <button onClick={() => setArr(arr.filter((item) => item < 10))}>过滤小于10 filter</button><br />
                <button onClick={sortFun}>排序 copy sort</button>
            </div>
        </div>
    )
}
export default Home;
