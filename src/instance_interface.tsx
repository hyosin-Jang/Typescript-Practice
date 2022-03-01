interface Person{
    name: string;
    age?: number; // 물음표가 들어갔다는 것은 설정을 해도 되고 안해도 되는 값
}

// Developer를 선언할 때 Person을 상속받음
interface Developer extends Person{
    skills: string[];
}

const person: Person = {
    name: '장효신',
};

const expert: Developer = {
    name: '장효신',
    skills: ['javascript', 'react']
};

const people: Person[] = [person, expert];