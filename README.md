# Typescript-Practice

## 📝 타입스크립트 핸드북
- [캡틴판교님 타입스크립트 핸드북](https://joshua1988.github.io/ts/)
- [타입스크립트 딥 다이브](https://radlohead.gitbook.io/typescript-deep-dive/)
- [5분 안에 보는 타입스크립트](https://typescript-kr.github.io/)
- [한 눈에 보는 타입스크립트](https://heropy.blog/2020/01/27/typescript/)

<br/>

## 📝 실습 앞부분 (환경 세팅~기본 문법)
### 1. TS 환경 세팅 & 기본 문법 
- [X] [Typescript Deep Dive](https://radlohead.gitbook.io/typescript-deep-dive/type-system/migrating)

### 2. Styled-components에 ts 적용
- [X] [참고](https://velog.io/@hwang-eunji/styled-component-typescript)

### 3. 기본 타입

### 4. 함수에서 타입 정의하기

### 5. 클래스에서 interface 사용해보기

### 6. 일반 객체에서 interface 사용해보기
<br/>

## 📝 실습 뒷부분

### 7. Type Alias 사용하기
> **type과 interface, 어떤 용도로 사용해야 할까?**
- type과 interface 중 무엇을 써도 상관 없지만 일관성 있게 써야 함
- 다만, 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성할 때는 `interface`를 사용하는 것이 권장됨
([참고](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c))


### 8. Generics
> **제네릭, 언제 사용할까?**  
- 객체 A와 객체 B를 합쳐주는 merge라는 함수에서 A와 B가 어떤 타입이 올 지 모르기 때문에 any라는 타입을 쓸 수 있음
- but, 결과가 any라는 것은 merged안에 무엇이 있는지 모른다는 것이기 때문에 타입추론에 실패한 것과 다름 없음
- 이런 상황에 제네릭을 사용함

<br/>

## 9. React.FC 장단점
- React.FC를 사용할 때는 props를 Generics로 넣어서 사용함

### 장점
- props에 기본적으로 children이 들어가있음
- 두 번째는 컴포넌트의 `defaultProps`, `propTypes`, `contextTypes`를 설정할 때 자동완성이 될 수 있음

### 단점
- children이 옵셔널 형태로 들어가있으므로 컴포넌트의 props 타입이 명백하지 않음
- 예를 들어, 어떤 컴포넌트는 children이 무조건 있어야 하는 경우도 있고, 어떤 컴포넌트는 children이 들어가면 안되는 경우도 있음
- 결국 그에 대한 처리를 하려면 Props 타입 안에 Children을 명시해야 함
- React.FC를 사용하는 경우 `defaultProps`가 제대로 작동하지 않음 (`Greetings.tsx` 참고)


**Tip. 렌더링할 때 어떤 props가 빠졌는지 알고 싶다면**
- 단순히 커서를 컴포넌트 위에 올리거나
- 컴포넌트의 props를 설정하는 부분에서 ctrl + Space를 누른다  
<br/>

### 정리
- React.FC는 별로 좋지 않다.
- 함수형 컴포넌트를 작성할 때는 화살표 함수로 작성해도 되고, function 키워드를 사용해도 된다.
- Props에 대한 타입을 선언할 때 interface 또는 type을 사용하며, 프로젝트 내부에서 일관성만 지키면 된다.  

<br/>

## 📝 타입스크립트로 리엑트 Hooks 사용하기

## 10. useState로 이벤트 관리
> **useState를 사용할 때 어떤 상황에 Generics를 사용하는게 좋을까?**
- 상태가 null일수도 있고 아닐 수도 있을 때 Generics를 활용하는게 좋다.

- 배열인 경우 아래처럼 빈 배열만 넣는다면 해당 배열이 어떤 타입으로 이루어진 배열인지 추론할 수 없기 때문에 Generics를 명시해야 함

```python
type Todo = {id: number; text: string ; done: boolean};
const [todos, setTodos] = useState<Todo[]>([]);
```

- 만약 Generics를 사용하지 않는다면 다음과 같이 할수도 있긴 하지만 코드가 예쁘지 않음
- 여기서 사용된 `as`는 Type assertion 문법으로, 특정 값이 특정 타입이라는 정보를 나타냄

```python
const [todos, setTodos] = useState([] as Todo[]);
```

<br/>

## 11. useReducer

### 카운터를 useReducer로 다시 구현하기
> 타입스크립트 환경에서 `useReducer`를 사용해보자
- 아까 만들었던 Counter 컴포넌트를 useState가 아닌 useReducer를 사용하는 코드로 만들어보자

Counter.tsx 참고

**Action**

```python
type Action = { type: 'INCREASE' } | { type: 'DECREASE' };
```

- 액션 부분을 보면 `|` 문자를 사용했는데 이 문자는 OR를 의미한다.
- 따라서 이 코드는 Action의 타입은 INCREASE거나 DECREASE라는 것을 명시해준다.

- Counter.tsx의 `reducer` 함수의 맨 윗줄을 확인해보자

```python
function reducer(state: number, action: Action): number
```

- `state` 의 타입과 함수의 리턴 타입이 동일한 것을 확인할 수 있다.
- 이렇게 리듀서를 만들 때는 파라미터로 받아온 상태의 타입과 함수가 리턴하는 타입을 동일하게 설정하는 것이 매우 중요하다.
- 이렇게 설정하면 여러 실수들을 방지할 수 있다.
    - 예) 특정 케이스에 결과값을 반환하지 않은 경우, 상태의 타입이 바뀐 경우 에러 감지할 수 있음
- 지금은 액션들이 `type` 만 있어서 간단하나, 액션 객체에 다른 값들이 필요한 경우 마찬가지로 다른 값들도 타입을 명시해주면 추후 리듀서를 작성할 때 액션 객체 안에 무엇이 들어있는지 자동완성을 통해서 알 수 있다.
- 추가적으로 새로운 액션을 디스패치할 때도 액션에 대한 타입스크립트 타입 검사도 해준다.
<br/>

## 12.ReducerSample 구현하기

- 자동완성이 되는 것과 타입검사가 되는 것을 직접 확인해보기 위해 ReducerSample이라는 컴포넌트를 만들어보자

src/ReducerSample.tsx

```python
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

type Action = 
| { type: 'SET_COUNT'; count: number}
| { type: 'SET_TEXT'; text: string}
| { type: 'SET_COLOR'; color: Color}
| { type: 'TOGGLE_GOOD'; }
```

- 이렇게 상태 값이 객체로 이루어져 있고 안에 여러 타입의 값이 들어 있다면 `State` 처럼 이에 대한 타입을 미리 준비해놓는게 좋다.
- 이번에 다룬 액션들은 `type`만 있는 것이 아니라 `count`, `text`, `color` 같은 추가적인 값이 있다.
- 이러한 상황에서 `Action`이라는 타입스크립트 타입을 정의함으로써 리듀서에서 자동완성이 되어 개발에 편의성을 더해주고, 액션을 디스패치할 때도 액션에 대한 타입검사가 이루어지므로 사소한 실수를 사전에 방지할 수 있다.

<br/>

## 13. useRef

`useRef`는 리엑트 컴포넌트에서 외부 라이브러리의 인스턴스 또는 DOM을 특정 값 안에 담을 때 사용한다. 추가적으로 이를 통해 컴포넌트 내부에서 관리하고 있는 값을 관리할 때 유용하다. 

⇒ 단, 이 값은 렌더링과 관계가 없어야 함!

### 1) 변수 값 관리하기

- 타입스크립트에서 useRef를 통해 변수 값을 관리하고 싶을 때는 다음과 같이 코드를 작성하면 된다.
- 아래 코드같이 Generic을 통해 `useRef.current`의 값을 추론할 수 있다.

```python
const id = useRef<number>(0);
const increaseId = () => {
    id.current += 1;
}
```

### 2) DOM 관리하기

- ref에 DOM을 담을 때도 마찬가지다. 이떄, 초깃값은 null로 설정해줘야 한다.
- MyForm 컴포넌트에서 handleSubmit 이벤트가 등록됐을 때 첫번째 인풋에 포커스가 잡히도록 수정해보자

```python
const inputRef = useRef<HTMLInputElement>(null); // 초깃값은 null로 주기
```

- inputRef 코드를 보면 Generic으로 `HTMLInputElement` 타입을 넣어줬다.
- 추후에 ref를 사용할 때 어떤 타입을 써야하는지 헷갈린다면 에디터에서 커서를 원하는 DOM 위치에 올려놓으면 된다.

![화면 캡처 2022-03-02 140920](https://user-images.githubusercontent.com/71035113/156299253-94ee5ee5-6629-4608-80b8-a340071b30d2.jpg)

- 추가적으로 `inputRef.current`의 값을 사용하려면 null 체크를 해줘야 한다.
- 즉, 특정 값이 정말 유효한지 유효하지 않은지 체크하는 건데, 타입스크립트에서 만약 어떤 타입이 undefined이거나 null일 수 있는 상황에는 해당 값이 유효한지 체킹하는 작업을 꼭 해줘야 자동완성도 잘 이뤄지고, 오류도 사라진다.

<br/>

### 정리
- useState를 사용할 때는 useState<string>과 같이 Generics를 사용한다.
- 상황에 따라 Generics를 생략할 수도 있는데 배열이나 까다로운 객체를 다룰 때나, 상태가 null인 상황이 발생할 수 있을 경우에는 Generics를 명시해야 한다.
- useReducer를 사용할 때는 액션에 대한 타입스크립트 타입들을 모두 준비하고 | 문자를 사용해서 이어준다.
- 타입스크립트 환경에서 useReducer를 쓰면 자동완성도 잘되고 타입체킹도 잘 된다.
- useRef를 사용할 때는 Generics로 타입을 정의한다.
- useRef로 변수 값을 관리하거나 DOM 정보를 담을 수 있는데, 변수 값을 관리할 때는 Generics로 타입을 지정하면 useRef.current를 사용할 때, 타입추론을 할 수 있다.
- DOM 정보를 담을 때는 초깃값을 null로 설정해야 하고 값을 사용할 때는 에러를 방지하기 위해 null 체킹을 해서 해당 값이 유효한지 확인해야 한다.
- +) `null checking` 관련해서 assertion operator인 `!`를 사용하면 좀 더 단순하게 코드를 작성할 수 있다. 

```python
inputRef.current!.focus();
```

<br/> 
  
### 궁금한 점
- 개발하다가 간혹 ref 대신 forwardRef를 사용하라는 에러 메시지를 봤었는데 forwardRef는 무엇이고 언제 사용하는지 공부하기
<br/>
  
### 참고
- [React Refs with TypeScript. All your questions related to… | by Martin Hochel | Medium](https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315)
- [타입스크립트로 리액트 Hooks 사용하기 (useState, useReducer, useRef) (velog.io)](https://velog.io/@velopert/using-hooks-with-typescript)
