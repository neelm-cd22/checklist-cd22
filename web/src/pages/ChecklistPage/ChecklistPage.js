import { Form, TextField, Submit, useForm } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags, useMutation, useQuery } from '@redwoodjs/web'
import ChecklistTasksCell, { QUERY } from 'src/components/ChecklistTasksCell'
import ChecklistListHeaderCell from 'src/components/ChecklistListHeaderCell'
import NavigationLayout from 'src/layouts/NavigationLayout/NavigationLayout'

const CREATE_TASK = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
      id
    }
  }
`

const ChecklistPage = ({ id }) => {
  const formMethods = useForm()

  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    onCompleted: () => {
      formMethods.reset()
    }
  })

  const onSubmit = (formData) => {
    createTask({
      variables: {
        input: {
          body: formData.body,
          description: formData.description,
          completed: false,
          checklistId: id
        }
      },
      refetchQueries: [{ query: QUERY }, 'FindChecklistTasksQuery']
    })
  }

  return (
    <>
      <MetaTags title="CreateTemplate" description="CreateTemplate page" />
      <NavigationLayout />
      <div className="mx-auto w-1/2 p-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <ChecklistListHeaderCell id={id} />

        <ChecklistTasksCell id={id} />

        <Form className="new-task-creator" onSubmit={onSubmit} formMethods={formMethods}>
          <TextField
            name="body"
            placeholder="Enter task here"
            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <TextField
            name="description"
            placeholder="Enter description here"
            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <Submit
            disabled={loading}
            className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            New Task
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 -mr-1 w-5 h-5"
              x="0px"
              y="0px"
              width="50"
              height="50"
              fill="currentColor"
              viewBox="0 0 50 50"
            >
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 16.986328 A 1.0001 1.0001 0 0 0 24 18 L 24 24 L 18 24 A 1.0001 1.0001 0 1 0 18 26 L 24 26 L 24 32 A 1.0001 1.0001 0 1 0 26 32 L 26 26 L 32 26 A 1.0001 1.0001 0 1 0 32 24 L 26 24 L 26 18 A 1.0001 1.0001 0 0 0 24.984375 16.986328 z"></path>
            </svg>
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default ChecklistPage