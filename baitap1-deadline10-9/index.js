"use strict";
let students = [{ mssv: 102170311, tensv: 'taoquangtruong', email: 'rtir' }, { mssv: 102170323, tensv: 'taoquangtruong', email: 'rtir' }];
class Student {
    constructor(mssv, tensv, email) {
        this.mssv = mssv;
        this.tensv = tensv;
        this.email = email;
    }
}

function printStudents() {
    console.log(students);
}

function addStudents(mssv, tensv, email) {
    // for (let i = 0; i < 3; i++) {
    //     let newStudent = new Student();
    //     students.push(newStudent);
    // }
    let newStudent = new Student(mssv, tensv, email);
    students.push(newStudent);
}


function getIndexStudentByMssv(mssv) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].mssv === mssv) {
            return i;

        }
    }
    return -1;
}

function updateStudent(mssv, payload) {
    let indexStudentUpdate = getIndexStudentByMssv(mssv);

    if (indexStudentUpdate !== -1) {
        students[indexStudentUpdate].mssv = payload.mssv
        students[indexStudentUpdate].tensv = payload.tensv
        students[indexStudentUpdate].email = payload.email
    }

};

function deleteStudent(mssv) {
    let indexStudentDelete = getIndexStudentByMssv(mssv);
    let _students = [];

    if (indexStudentDelete !== -1) {
        for (let i = 0; i < students.length; i++) {
            if (i === indexStudentDelete) continue;
            else {
                _students.push(students[i]);
            }
        }
    }

    students = _students;
}
addStudents(102170322, 'taoquangtruong', 'rtir');
printStudents();

updateStudent(102170311, {
    mssv: 102170333,
    tensv: 'taoquangtruong',
    email: 'rtir'
});
printStudents();


deleteStudent(102170323);
printStudents();