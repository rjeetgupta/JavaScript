/*
const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
        
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key]);
}
*/


const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United States Of America")

for (const key in map) {
    console.log(key);  // maps can not iterable this way we study latter
}