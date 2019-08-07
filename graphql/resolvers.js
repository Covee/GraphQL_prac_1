const cobee = {
    name: "cobee",
    age: 27,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => cobee
    }
};

export default resolvers;