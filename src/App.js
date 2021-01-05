import React, {memo, useState, useCallback, useMemo} from 'react';
import './App.css'



const Test = memo(({onClick, cartSum}) => {
    console.log('test was rerender');

    return <h2 onClick={() => onClick(Math.random())}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est facilis id omnis quidem sequi? Ab assumenda facere molestias nobis pariatur! A aspernatur deleniti eligendi ipsam molestiae quisquam sequi totam!
        {cartSum.val}
    </h2>
});



export default function App() {

    const [counter, setCounter] = useState(0);
    const [arr, setArr] = useState([1,3,432,12,457,2321,112,44,2,124,554,3998]);

    const onClickHandler = useCallback((num) => console.log(num), []);

    const cartSum = useMemo(() => ({val: arr.reduce((acc, el) => (acc += el), 0)}),
        [arr]
    );


    return (
      <div className={'app'}>
          {/*<h1 onClick={() => setCounter((prev) => prev + 1)}>Hello World! {counter}</h1>*/}
          <h1 onClick={() => setArr((prev) => [...prev, Math.random()])}>Hello World! {counter}</h1>
          <Test title={'test'} onClick={onClickHandler} cartSum={cartSum}/>
      </div>
    );
}