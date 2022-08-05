import { Form, Submit, TextField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react';

export const QUERY = gql`
query FindTaskListQuery($id: Int!) {
  taskList: tasksTemplate(templateId: $id) {
    id
    body
    description
  }
}
`

const DELETE_TASK = gql`
  mutation DeleteTaskMutation($taskId: Int!) {
    deleteTask(id: $taskId) {
      id
    }
  }
`

const UPDATE_TASK = gql`
  mutation UpdateTaskMutation($taskId: Int!, $input: UpdateTaskInput!) {
    updateTask(id: $taskId, input: $input) {
      id
      body
      description
    }
  }
`

// const UPDATE_TODO_MUTATION = gql`
//   mutation UpdateTodoMutation($id: Int!, $input: UpdateTodoInput!) {
//     updateTodo(id: $id, input: $input) {
//       id
//       body
//       status
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ taskList }) => {
  const [deleteTask, { error }] = useMutation(DELETE_TASK)
  const [updateTask] = useMutation(UPDATE_TASK)

  if (error) console.log(`Submission error! ${error.message}`)

  const onDelete = (id) => {
    deleteTask({
      variables: {
        taskId: id
      },
      refetchQueries: ['FindTaskListQuery']
    })
  }

  const onUpdate = (id) => {
    updateTask({
      variables: {
        taskId: id,
        input: {
          body: "Test",
        }
      },
      refetchQueries: ['FindTaskListQuery']
    })
  }

  return taskList.map((taskList) => (
    <taskList key={taskList.key}>
      <div className="task">
        <input type="checkbox" className="checkbox"></input>
        <label htmlFor="task-1">
          <input
            type="text"
            className="body"
            defaultValue={taskList.body}
            onBlur={() => {
              console.log("Triggered because this input lost focus"); // Debug
              onUpdate(taskList.id) // Need to find way to send data to onUpdate function when focus is lost
            }}
          />
        </label>

        <Form className="temp" onBlur={(event) => { // This form is an experiment for sending data to the onUpdate function
          console.log(event)
        }}>
          <TextField name="body" placeholder="ENTER HERE" />
          <Submit>+</Submit>
        </Form>

        <button
          type="button"
          className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => onDelete(taskList.id)}
        >
          Delete
        </button>
      </div>
    </taskList>
  ))
}

// () => onUpdate(taskList.id)