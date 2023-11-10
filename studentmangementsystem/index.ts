// // my project school management system

class School {
  name: string;
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }
}

class Student {
  name: string;
  age: number;
  rollnum: number;
  schoolName: string;

  constructor(name: string, age: number, rollnum: number, schoolName: string) {
    this.name = name
    this.age = age;
    this.rollnum = rollnum;
    this.schoolName = schoolName;
  }
}

class Teacher extends Student {}

const school1 = new School("Iqra");
const school2 = new School("Fazaia");

const student1 = new Student("fizza",5, 1000, "Iqra");
const student2 = new Student("sana" ,12, 125, "Fazaia");
const student3 = new Student("laiba",12, 125, "Iqra");

const teacher1 = new Teacher("saba",12, 125, "Iqra");
const teacher2 = new Teacher("atif",12, 125, "Iqra");
const teacher3 = new Teacher("anas",12, 125, "Iqra");

school1.addStudent(student1);
school2.addStudent(student2);
school2.addTeacher(teacher1);

console.log(school1);
console.log(school2);



