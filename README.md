# Typescript-Practice

## 타입스크립트 핸드북
- [캡틴판교님 타입스크립트 핸드북](https://joshua1988.github.io/ts/)
- [타입스크립트 딥 다이브](https://radlohead.gitbook.io/typescript-deep-dive/)
- [5분 안에 보는 타입스크립트](https://typescript-kr.github.io/)
- [한 눈에 보는 타입스크립트](https://heropy.blog/2020/01/27/typescript/)

## 실습 
### 1. TS 환경 세팅 & 기본 문법 
- [X] [Typescript Deep Dive](https://radlohead.gitbook.io/typescript-deep-dive/type-system/migrating)

### 2. Styled-components에 ts 적용
- [X] [참고](https://velog.io/@hwang-eunji/styled-component-typescript)

### 3. 기본 타입

### 4. 함수에서 타입 정의하기

### 5. 클래스에서 interface 사용해보기

### 6. 일반 객체에서 interface 사용해보기

### 7. Type Alias 사용하기
🤷‍♀️ **type과 interface, 어떤 용도로 사용해야 할까?**
- type과 interface 중 무엇을 써도 상관 없지만 일관성 있게 써야 함
- 다만, 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성할 때는 `interface`를 사용하는 것이 권장됨
[참고자료](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

### 8. Generics
🤷‍ **제네릭, 언제 사용할까?**
- 객체 A와 객체 B를 합쳐주는 merge라는 함수에서 A와 B가 어떤 타입이 올 지 모르기 때문에 any라는 타입을 쓸 수 있음
- but, 결과가 any라는 것은 merged안에 무엇이 있는지 모른다는 것이기 때문에 타입추론에 실패한 것과 다름 없음
- 이런 상황에 제네릭을 사용함

### 9. React.FC 장단점
- React.FC를 사용할 때는 props를 Generics로 넣어서 사용함

**장점**
- props에 기본적으로 children이 들어가있음
- 두 번째는 컴포넌트의 defaultProps, propTypes, contextTypes를 설정할 때 자동완성이 될 수 있음

**단점**
- children이 옵셔널 형태로 들어가있으므로 컴포넌트의 props 타입이 명백하지 않음
- 예를 들어, 어떤 컴포넌트는 children이 무조건 있어야 하는 경우도 있고, 어떤 컴포넌트는 children이 들어가면 안되는 경우도 있음
- 결국 그에 대한 처리를 하려면 Props 타입 안에 Children을 명시해야 함
- React.FC를 사용하는 경우 defaultProps가 제대로 작동하지 않음 (`Greetings.tsx` 참고)

**Tip. 렌더링할 때 어떤 props가 빠졌는지 알고 싶다면**
- 단순히 커서를 컴포넌트 위에 올리거나
- 컴포넌트의 props를 설정하는 부분에서 ctrl + Space를 누른다

## 정리
- React.FC는 별로 좋지 않다.
- 함수형 컴포넌트를 작성할 때는 화살표 함수로 작성해도 되고, function 키워드를 사용해도 된다.
- Props에 대한 타입을 선언할 때 interface 또는 type을 사용하며, 프로젝트 내부에서 일관성만 지키면 된다.

## 타입스크립트로 리엑트 Hooks 사용하기
### 10. useState로 이벤트 관리
🤷‍ **useState를 사용할 때 어떤 상황에 Generics를 사용하는게 좋을까?**
- 상태가 null일수도 있고 아닐 수도 있을 때 Generics를 활용하는게 좋다.

### 11. useReducer
