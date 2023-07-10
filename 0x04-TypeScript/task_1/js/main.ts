interface Teacher {
  firstName: string;
  lasttName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the function interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement a function that adheres to the interface
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
};

// Define the class interface
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define the constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Implement the StudentClass
class Student implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

