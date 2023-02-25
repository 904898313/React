import { forwardRef } from 'react';

const Zi = (props: any, ref: any) => {
    console.log(props, ref);
    return (
        <input type="text" ref={ref} />
    )
}

export default forwardRef(Zi)