// 가장 우측의 number는 해당 함수의 결과물이 숫자라는 것 명시
function sum(x: number, y: number): number{
    return x+y;
}
sum(1, 2);

function sumArray(numbers: number[]): number{
    // 배열의 내장함수를 사용할 때도 타입 유추가 잘 이뤄짐
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
