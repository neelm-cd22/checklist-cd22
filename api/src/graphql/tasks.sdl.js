export const schema = gql`
  type Task {
    id: Int!
    body: String!
    description: String
    completed: Boolean!
    template: Template
    templateId: Int
    Checklist: Checklist
    checklistId: Int
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
    tasksTemplate(templateId: Int!): [Task!]! @requireAuth
  }

  input CreateTaskInput {
    body: String!
    description: String
    completed: Boolean!
    templateId: Int
    checklistId: Int
  }

  input UpdateTaskInput {
    body: String
    description: String
    completed: Boolean
    templateId: Int
    checklistId: Int
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
