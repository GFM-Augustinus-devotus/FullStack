const str = `{
    "name": "Gabriel",
    "job": "Software Developer",
    "technologies": ["HTML", "CSS", "Javascript", "SQL"],
    "working": false,
    "yearsOfExperience": 6,
    "website": null
}`

const obj = JSON.parse(str)
const str2 = JSON.stringify(obj)

console.log(obj)
console.log(str2)

