import { Link, routes } from "@redwoodjs/router"

export const QUERY = gql`
  query FindChecklistQuery {
    checklists {
      id
      title
      description
      tasks {
        body
        completed
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ checklists }) => {
  return (
    <div className="rounded-lg">
      <p className="pt-3 ml-10 justify-center text-3xl font-sans font-bold">
        Checklists
      </p>
      <ul className="px-10 py-4 mx-auto w-full grid gap-4 grid-cols-5 grid-rows-1">
        {checklists.map((item) => {
          return (
            <li key={item.title} className="col-span-1">
            <Link
                to={routes.checklist({ id: item.id })}
                className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="font-base text-sm text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="mt-1">
                  {item.tasks.map((task) => {
                    return (
                      <div key={task.body}>
                        <input
                          id="default-checkbox"
                          checked={task.completed}
                          type="checkbox"
                          value="true"
                          className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 rounded-lg border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ml-2 text-sm font-base text-gray-900 dark:text-gray-300"
                        >
                          {task.body}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}