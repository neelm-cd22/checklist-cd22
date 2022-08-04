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
              console.log("Triggered because this input lost focus");
              onUpdate(taskList.id)
            }}
          />
        </label>

        <Form className="temp" onBlur={(event) => {
          console.log(event)
        }}>
          <TextField name="body" placeholder="ENTER HERE" />
          <Submit>+</Submit>
        </Form>

        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDelete(taskList.id)}
        >
          Delete
        </button>
      </div>
    </taskList>
  ))
}

// () => onUpdate(taskList.id)