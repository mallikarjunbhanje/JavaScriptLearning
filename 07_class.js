class Employee {
    constructor(name,id,age,city){
        this.name = name;
        this.id = id;
        this.age = age;
        this.city = city;
    }
    details(){

        console.log(this.name,this.age,this.id,this.city);
    }
} 
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill.name,empBill.id,empBill.age,empBill.city);

//studen Management

class Student{
  name
  age
  rollNo
  graduction
  constructor(name,age,rollNo,graduction)
  {
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;
    this.graduction=graduction;
  }
}
let stud= new Student("Ganes",25,647,"BE Mechanical");
console.log(stud);