import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC<{ compiler: string, framework: string }> = (props) => {
  var num: number = 123
  function identity(num: number):number{
    return num
  }

  /* 배열 어노테이션 [] */
  var boolArray: boolean[]
  boolArray = [true, false]
  console.log(boolArray[0])
  console.log(boolArray.length) // 2

  /* 인터페이스: 다수의 어노테이션을 포함해서, 유형 검사를 한번에 하기 쉽게 만든 것? */
  interface Name{
    first: string
    second: string
  }
  var name: Name
  name = {
    first: 'hyosin',
    second: 'Jang'
  }
  console.log(name);

  /* 특별한 타입: any, void, null, undefined */
  var power: any

  // Takes any and all types
  power = '123'
  power = 123

  // Is compatible with all types
  var num: number
  power = num
  num = power

  //Union Type: 합집합처럼 여러 타입 정의할 때 사용
  function formatCommandline(command: string[] | string){
    var line = ''
    if (typeof command ==='string'){
      line = command.trim()
    } else{
      line = command.join(' ').trim()
    }
  }

  // Intersection Type
  function extend<T, U>(first: T, second: U): T & U{
    return {...first, ...second};
  }

  const x = extend({a:"hello"}, {b: 42});

  // x now has both 'a' and 'b'
  const a = x.a;
  const b = x.b;

  // Tuple type
  var nameNumber: [string, number]

  // Okay
  nameNumber: ['Jenny', 8670]

  // Type Alias
  type StrOrNum = string | number
  var sample: StrOrNum
  sample = 123
  sample = '123'





  return (
    <div>
      <div>{props.compiler}</div>
      <div>{props.framework}</div>
      <div>{identity(5)}</div>
    </div>
  );
}

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);