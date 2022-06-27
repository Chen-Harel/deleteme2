let students =[
    {
        name:"Chen",
        age: 30,
        nickName:"student1"
    },
    {
        name:"Noya",
        age: 27,
        nickName:"student2"
    },
    {
        name:"Ron",
        age: 25,
        nickName:"student3"
    }
];

export function studentsList(){
    return students
}

export function studentList(nickName){
    return students.find(students => students.nickName === nickName)
}