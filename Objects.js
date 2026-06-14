// const emploees = {
//     name: ["Ali", "Ahmed", "Sara"],
//     age: [30, 40, 25],
//     job: ["Developer", "Manager", "Analyst"],
// }
// console.log(emploees.age[1]);


//it can dofined by bractes or without it and we need it here "job definition"

// const emploees = {
//     "name": ["Ali", "Ahmed", "Sara"],
//     "age": [30, 40, 25],
//     "job": ["Developer", "Manager", "Analyst"],
//     "job definition": ["in this job1 .....", "in this job2 .....", "in this job3 ....."]
// }
// emploees.title = "Senior Developer";
// emploees.age[0] = 35;
// // delete emploees.job;
// // console.log(emploees["job definition"][1]);
// console.log(emploees.title);
// console.log(emploees.age[0]);
// // console.log(emploees.job);
// console.log(emploees.hasOwnProperty("tall"));

// ك Array of objects
const emploees = [{
    name: ["Ali", "Ahmed", "Sara"],
    age: [30, 40, 25],
    job: ["Developer", "Manager", "Analyst"],
},
{
    name: ["Mohammed", "Youssef", "Fatima"],
    age: [28, 35, 22],
    job: ["Designer", "Director", "Consultant"]
}];
console.log(emploees[1].name[0]);
 function addEmployeebyage() {
    const newEmploye = {
        name: "Fahad",
        age: 50,
        job: "Job"
    }
    const oldEmploye = emploees[1].age[0];
    if (newEmploye.age > oldEmploye) {
        emploees.push(newEmploye);
    }
    return emploees;
 }
console.log(addEmployeebyage());
console.log(emploees[2].age);


