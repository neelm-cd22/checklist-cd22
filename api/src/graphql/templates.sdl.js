export const schema = gql`
  type Template {
    id: Int!
    title: String!
    description: String
    tasks: [Task]!
  }

  type Query {
    templates: [Template!]! @requireAuth
    template(id: Int!): Template @requireAuth
  }

  input CreateTemplateInput {
    title: String!
    description: String
  }

  input UpdateTemplateInput {
    title: String
    description: String
  }

  type Mutation {
    createTemplate(input: CreateTemplateInput!): Template! @requireAuth
    updateTemplate(id: Int!, input: UpdateTemplateInput!): Template!
      @requireAuth
    deleteTemplate(id: Int!): Template! @requireAuth
  }
`
