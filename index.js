///////////////////////////////////// SKOLA
let teknikhögskolan = {
  name: "Teknikhögskolan",
  students: [],
  teachers: [],
  subjects: [],
  ///////////////////////////////////// STUDENT METODER
  addStudent: function (student) {
    this.students.push(student);
  },
  removeStudent: function (student) {
    const indexposition = this.students.findIndex(
      (s) => s.name === student.name
    );
    this.students.splice(indexposition, 1);
    return `${student.name} was removed for ${this.name}`;
  },
  enlistToSubject: function (student, subject) { 
    if (!student.subjects.includes(subject)) {
      student.subjects.push(subject); 
      subject.students.push(student); 
      return `${student.name} has been enlisted to ${subject.name}`;
    } else {
      return `${student.name} is already enlisted in ${subject.name}`;
    }
  },
  ///////////////////////////////////// GEMENSAM
  addSubject: function (subject) {
    this.subjects.push(subject);
  },
  removeSubject: function (subject) {
    let subjectIndex = this.subjects.indexOf(subject);
    this.subjects.splice(subjectIndex, 1);
    return `${subject.name} has been removed from ${this.name}.`
  },
  quitSubject: function (student, subject) {
    const studentIndex = student.subjects.indexOf(subject);
    if (studentIndex !== -1) {
      student.subjects.splice(studentIndex, 1);
      const subjectIndex = subject.students.indexOf(student);
      subject.students.splice(subjectIndex, 1);
      return `${student.name} has quit the ${subject.name} course.`;
    }
    return `${student.name} is not enrolled in ${subject.name}.`;
  },
  ///////////////////////////////////// LÄRARE METODER
  addTeacher: function (teacher) {
    this.teachers.push(teacher);
  },
  removeTeacher: function (teacher) {
    const indexposition = this.teachers.findIndex(
      (t) => t.name === teacher.name);
      if (indexposition !== -1) {
        this.teachers.splice(indexposition, 1);
        return `${teacher.name} was removed from ${this.name}`;
      } else {
        return `${teacher.name} is not a teacher at ${this.name}`;
      }
  },
  assignToSubject: function (teacher, subject) {
    teacher.subjects.push(subject);
    subject.teacher = teacher;
    return `${teacher.name} has been assigned to ${subject.name}`;
  }
};

///////////////////////////////////// ÄMNEN
let frontend = {
  name: "Frontend",
  students: [],
  teacher: {},
};

let javaScript = {
  name: "JavaScript",
  students: [],
  teacher: {},
};

let matematik = {
  name: "Matematik",
  students: [],
  teacher: {},
};

///////////////////////////////////// STUDENTER
let oliver = {
  name: "Oliver",
  age: 24,
  gender: "male",
  subjects: [],
};

let charlie = {
  name: "Charlie",
  age: 19,
  gender: "male",
  subjects: [],
};

let simon = {
  name: "Simon",
  age: 29,
  gender: "male",
  subjects: [],
};

let bruno = {
  name: "Bruno",
  age: 22,
  gender: "male",
  subjects: [],
};

let victor = {
  name: "Victor",
  age: 26,
  gender: "male",
  subjects: [],
};

///////////////////////////////////// LÄRARE
let patrik = {
  name: "Patrik",
  subjects: [],
};

let niklas = {
  name: "Niklas",
  subjects: [],
};

let daniel = {
  name: "Daniel",
  subjects: [],
};

///////////////////////////////////// BETYG
// FORTSÄTT HÄR.

//////////////////////////// SKAPA EN STRUKTUR.
// Lägg till ämnen i skolan
teknikhögskolan.addSubject(frontend);
teknikhögskolan.addSubject(javaScript);
teknikhögskolan.addSubject(matematik);

// Lägg till studenter i skolan
teknikhögskolan.addStudent(oliver);
teknikhögskolan.addStudent(charlie);
teknikhögskolan.addStudent(simon);
teknikhögskolan.addStudent(bruno);
teknikhögskolan.addStudent(victor);

// Lägg till lärare i skolan
teknikhögskolan.addTeacher(patrik);
teknikhögskolan.addTeacher(daniel);
teknikhögskolan.addTeacher(niklas);

// Tilldela lärare ämnen
teknikhögskolan.assignToSubject(patrik, frontend);
teknikhögskolan.assignToSubject(niklas, javaScript);
teknikhögskolan.assignToSubject(daniel, matematik);

// Tilldela studenter ämnen
teknikhögskolan.enlistToSubject(oliver, frontend);
teknikhögskolan.enlistToSubject(charlie, javaScript);
teknikhögskolan.enlistToSubject(simon, matematik);
teknikhögskolan.enlistToSubject(victor, matematik);
teknikhögskolan.enlistToSubject(bruno, javaScript);

// FUNKTION FÖR ATT SE STUDENTER ENROLLED
function displayAllStudents() {
  for (let student of teknikhögskolan.students) {
    console.log(student.name);
  }
}

function displayAllSubjectsOfPerson(student) {
  for (let subject of student.subjects) {
    console.log(subject.name);
  }
}

function displayAllTeachers() {
  for (let teacher of teknikhögskolan.teachers) {
    console.log(teacher.name);
  }
}

// COMMANDS ARRAY
const commands = [
  {
    command: "teknikhögskolan.addSubject(subject)",
    description: "Adds a subject to the school.",
  },
  {
    command: "teknikhögskolan.removeSubject(subject)",
    description: "Removes a subject from the school.",
  },
  {
    command: "teknikhögskolan.addStudent(student)",
    description: "Adds a student to the school.",
  },
  {
    command: "teknikhögskolan.removeStudent(student)",
    description: "Removes a student from the school.",
  },
  {
    command: "teknikhögskolan.enlistToSubject(student, subject)",
    description: "Enrolls a student to a specific subject.",
  },
  {
    command: "teknikhögskolan.quitSubject(student, subject)",
    description: "A student quits a specific subject.",
  },
  {
    command: "teknikhögskolan.addTeacher(teacher)",
    description: "Adds a teacher to the school.",
  },
  {
    command: "teknikhögskolan.removeTeacher(teacher)",
    description: "Removes a teacher from the school.",
  },
  {
    command: "teknikhögskolan.assignToSubject(teacher, subject)",
    description: "Assigns a teacher to a subject.",
  },
];

// Print the commands in a readable format
function help() {
commands.forEach(cmd => {
  console.log(`Command: ${cmd.command}`);
  console.log(`Description: ${cmd.description}\n`);
})};

// Console
help()
