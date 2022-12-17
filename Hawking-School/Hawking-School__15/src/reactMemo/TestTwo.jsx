import React, {useState, memo} from 'react';

const Component1 = memo(({age, name}) => {
  console.log('Component1')
  return (
    <div> {`Name: ${name} / age: ${age}`}</div>
  )
})

const TestTwo = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(22)

  const handlerClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handlerClick}>CLick {count}</button>
      <button onClick={() => setAge(age+1)}>CLick</button>
      <Component1 age={age} name='Maks'/>
    </div>
  );
};

export {TestTwo};
