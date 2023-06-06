let students = [
    { 
        name: "John Doe",
         neptunCode: "AAA123",
         subjects: [
            {
                name: "Programming I.",
                credit: 6
            },
            {
                name: "Programming II.",
                credit: 3
            },
            {
                name: "Analytics",
                credit: 5
            }
         ]
    },
    { 
        name: "Jane Doe",
         neptunCode: "VE2C5T",
         subjects: [
            {
                name: "Programming II.",
                credit: 7
            },
            {
                name: "Maths",
                credit: 6
            }
         ]
    }
]

function sumStudentSubjectsCredits(student){
    let sumCredits = 0;

    for (let i = 0; i < student.subjects.length; i++) {
        sumCredits += student.subjects[i].credit;
    }

    return sumCredits;
}

let mainUl = document.createElement("ul")
for (let i = 0; i < students.length; i++) {
    const student = students[i]
    const studentCredits = sumStudentSubjectsCredits(student);

    let nameSumLi = document.createElement("li")
    nameSumLi.innerText = student.name + "  -  " + student.neptunCode + " - " + sumStudentSubjectsCredits(student)

    let ulElementForSubjects = document.createElement("ul");

    for (let j = 0; j < student.subjects.length; j++) {
        const subject = student.subjects[j];
        
        let liElement = document.createElement("li")
        liElement.innerText = subject.name + "  -  " + subject.credit

        ulElementForSubjects.appendChild(liElement)
    }
    
    mainUl.appendChild(nameSumLi)
    mainUl.appendChild(ulElementForSubjects)

    console.log(student.name + " - " + student.neptunCode + " - " + studentCredits)
}

let outPut = document.querySelector("#output").appendChild(mainUl)
