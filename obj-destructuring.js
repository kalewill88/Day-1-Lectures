// Onject Destructuring

let user = {
    username: "testuser",
    is_verified: true
}

let {username, is_verified} = user
console.log(username, is_verified)

let metadata = {
    title: "JavaScript Work Stuff",
    translations: [
        {
            locale: "do",
            localization_tags: [],
            last_edit: "2020-02-22T06:4147",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-werkzeug"
        }
    ],
    url:"/en-US/docs/Tools/Scratchpad"
}

// How to get title and translation title out?

let {
    title: englishTitle,
    translations: [
        {
            title: localeTitle
        }
    ]
} = metadata

console.log(englishTitle, localeTitle)

let family = {
    familyName: "Niemczyk",
    parents: [
        {name: "Hannah", age: 65},
        {name: "Zbigniew", age: 78}
    ],
    country: ["Germany", "England", "Poland"]
}

//Challenge
/*
    Welcome to my tiny family tree. Allow me to access my last name, my mom's name, and Poland out of this object
*/

let {
    familyName: lastName,
    parents: [
        {name: momName}
    ],
    country: [,,birthHome]
} = family;

console.log(lastName,momName, birthHome)