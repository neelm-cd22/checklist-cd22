import { Form, Submit, HiddenField } from '@redwoodjs/forms'
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ taskList }) => {
  const [deleteTask, { error }] = useMutation(DELETE_TASK)

  if (error) console.log(`Submission error! ${error.message}`)

  const onDelete = (id) => {
    deleteTask({
      variables: {
        taskId: id
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
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              {taskList.body}
            </label>
            <p
              id="helper-checkbox-text"
              className="text-xs font-normal text-gray-500 dark:text-gray-300"
            >
              {taskList.description}
            </p>
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