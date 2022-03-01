// interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법임

// interface는 클래스가 따라야 하는 요구사항이다.
interface Shape {
    getArea(): number; // shape인터페이스에는 getArea라는 함수가 꼭 있어야 하고, 반환값은 number다.
}

// implements 키워드를 사용해서 해당 클래스가 shape interface의 조건을 충족하겠다는 것을 명시함
class Circle implements Shape {
    // public accessor는 클래스의 코드 밖에서도 조회 가능함 의미
    constructor(public radius: number){
        this.radius = radius;
    }
    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    // private는 클래스 밖에서 조회 못함 
    constructor(private width: number, private height: number){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => {
    console.log(shape.getArea());
});