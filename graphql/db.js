export const people = [
    {
        id: "0",
        name: "cobee",
        age: 27,
        gender: "male"
    },
    {
        id: "1",
        name: "sandra",
        age: 21,
        gender: "female"
    },
    {
        id: "2",
        name: "jason",
        age: 37,
        gender: "male"
    },
    {
        id: "3",
        name: "andrea",
        age: 24,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}
