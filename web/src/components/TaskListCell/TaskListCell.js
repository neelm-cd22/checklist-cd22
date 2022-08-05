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

  const onUpdateDesc = (id, desc) => {
    console.log(body)
    updateTask({
      variables: {
        taskId: id,
        input: {
          description: desc,
        }
      },
      refetchQueries: ['FindTaskListQuery']
    })
  }

  return taskList.map((taskList) => (
    <taskList key={taskList.key}>
      <div className="flex justify-between">
        <div className="text-sm flex">
          <div className="flex h-auto items-center mr-2">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div>
            <label
              htmlFor="helper-checkbox"
            >
              <input
                type="text"
                className="font-medium text-gray-900 dark:text-gray-300"
                defaultValue={taskList.body}
                onBlur={(e) => {
                  let newBody = e.target.value
                  onUpdateDesc(taskList.id, newBody)
                }}
              />
              <input
                type="text"
                className="text-xs font-normal text-gray-500 dark:text-gray-300"
                defaultValue={taskList.description}
                onBlur={(e) => {
                  let newDescription = e.target.value
                  onUpdate(taskList.id, newDescription)
                }}
              />
            </label>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onDelete(taskList.id)}
          className="inline-flex items-center py-2 px-3 text-sm font-normal text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </div>
    </taskList>
  ))
}

// () => onUpdate(taskList.id)