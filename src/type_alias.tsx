interface Person{
    name: string;
    age?: number; // 물음표가 들어갔다는 것은 설정을 해도 되고 안해도 되는 값
}

// &는 Intersection으로 두개 이사의 타입들을 합침
type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: '장효신',
};

const expert: Developer = {
    name: '장효신',
    skills: ['javascript', 'react']
};

type People = Person[]; // Person[]를 People이라는 타입으로 사용할 수 있음
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];