// const tinderUser = new Object()  // singleton object
const tinderUser = {} // not a singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    userFullName: {
        firstname: "Ranjeet",
        lastname: "Kumar"
    }
}

// console.log(regularUser.userFullName.firstname)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj4 = { obj1, obj2 }

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3} // Most of the time , will be used
// console.log(obj4)



const user = [
    {
    id:  1,
    email: "some@gmail.com"
    },
    {
    id:  1,
    email: "some@gmail.com"
    },
    {
    id:  1,
    email: "some@gmail.com"
    }
]

user[1].email

console.log(tinderUser);



// Very userful method 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));





const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const { courseInstructor } = course
const { courseInstructor: Instructor } = course
console.log(courseInstructor);
console.log(Instructor);