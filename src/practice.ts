let count =0; // 숫자
count += 1;
count = '갑자기 문자열'; // 이러면 에러가 남

const message: string ='hello word'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

messages.push(1); // 숫자 넣으면 안됨 컴파일 단계에서 에러 발생함

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고, undefined일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
color = 'green'; // 에러 발생!