import React from 'react';

// interface도 가능
type GreetingsProps = {
    name: string;
    mark: string;
};

const Greetings: React.FC<GreetingsProps> = ({name, mark}) => (
    <div>Hello, {name} {mark}</div>
);

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;