import { Form, Submit, TextField } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

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

  const onUpdate = (id, body) => {
    console.log(body)
    updateTask({
      variables: {
        taskId: id,
        input: {
          body: body,
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
            onBlur={(e) => {
              let newBody = e.target.value
              onUpdate(taskList.id, newBody)
            }}
          />
        </label>
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