import React, { useState, useTransition } from "react";
const Home: React.FC = () => {
    const [val, setVal] = useState('');
    const [arr, setArr] = useState<number[]>([]);
    const [isPending, transition] = useTransition()
    const getList = (e: any) => {
        setVal(e.target.value)
        let arr = Array.from(new Array(20000), item => Date.now())
        transition(() => {
            setArr(arr);
        })
    }
    return (
        <div >
            <input value={val} onChange={getList} />
            1{isPending}1
            {
                isPending ? <h2>loading....</h2> : (
                    arr.map((item, key) => (
                        <div key={key}>{item}</div>
                    ))
                )
            }
        </div>
    )
}
export default Home;
