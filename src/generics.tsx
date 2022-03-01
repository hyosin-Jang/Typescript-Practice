function merge<A, B>(a: A, b: B) : A & B {
    return {
        ...a,
        ...b
    };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T){
    return param;
};
const wrapped = wrap(10);


interface Items<T>{
    list: T[];
}

// 리스트가 숫자 배열인 경우, 문자열배열인 경우, 객체 배열 또는 어떤 배열일 때도 
// interface만 사용할 수 있음
const items: Items<string> = {
    list: ['a', 'b', 'c']
}

// Type Alias에서 Generic 사용하기
type Items<T> = {
    list: T[];
};
const items: Items<string> = {
    list: ['a', 'b', 'c']
};

// 클래스에서 제네릭 사용하기
class Queue<T>{
    list: T[] = [];
    get length(){
        return this.list.length;
    }
    enqueue(item: T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

// Queue<string> - 문자열로 이루어진 Queue 타입
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());