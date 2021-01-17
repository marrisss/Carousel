const { buildSchema } = require("graphql");
module.exports = buildSchema(`

type Record{
   id: ID!
   name: String!
   email: String
   message: String!

}
input MessageInputData{
     email: String!
     message: String!
     name: String!
}
type Content {
    id: ID!
    mainheader: String!
    description: String!
}
 type RootQuery {
    getData: Content!
 }

type RootMutation{
    sendMessage(email: String!, message: String!, name: String!): Record!
    sendContent(mainheader: String!, description: String!): Content!
}

schema{
    query: RootQuery
    mutation: RootMutation
}

`);
