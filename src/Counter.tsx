import React, {useState} from 'react';

function Counter(){
    type Information = {name: string; description: string};
    const [info, setInformation] = useState<Information | null>(null);

    type Todo = {id: number; text:string; done: boolean };
    const [todos, setTodos ] = useState<Todo[]>([]); // 까다로운 구조의 객체일 때는 Generics를 명시하는 것이 좋음
    // useState([] as Todo[]); Type Assertion
    
    const [count, setCount] = useState<number>(0); // 제네릭 생략 가능
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
}

export default Counter;