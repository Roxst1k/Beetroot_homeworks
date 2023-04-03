class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value < 0) {
            throw new Error("Радіус не може бути від'ємним");
        }
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }

    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}


const myCircle = new Circle(5);
console.log(myCircle.radius); // 5
myCircle.radius = 7;
console.log(myCircle.radius); // 7
console.log(myCircle.diameter); // 14
console.log(myCircle.area); // 153.93804002589985
console.log(myCircle.circumference); // 43.982297150257104


//*************************Маркер*********************

class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    write(text) {
        let inkNeeded = text.replace(/\s/g, "").length * 0.5;
        if (inkNeeded > this.inkPercentage) {
            text = text.substring(0, (this.inkPercentage / 0.5));
            this.inkPercentage = 0;
        } else {
            this.inkPercentage -= inkNeeded;
        }
        console.log(`%c${text}`, `color: ${this.color}`);
    }
}

const blueMarker = new Marker("blue", 50);
blueMarker.write("Hello, world!"); // виведе текст "Hello, world!" синім кольором
console.log(blueMarker.inkPercentage)





// ************************** Працівники *******************
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let table = "<table>\n";
        table += "<tr><th>Name</th><th>Position</th><th>Salary</th></tr>\n";
        for (const emp of this.employees) {
            table += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.salary}</td></tr>\n`;
        }
        table += "</table>";
        return table;
    }
}

const employees = [
    new Employee("John Travolta", "Manager", 50000),
    new Employee("Will Smith", "Assistant Manager", 40000),
    new Employee("Bob Marley", "Teller", 30000)
];

const table = new EmpTable(employees);
document.getElementById("employees-table").innerHTML = table.getHtml();
