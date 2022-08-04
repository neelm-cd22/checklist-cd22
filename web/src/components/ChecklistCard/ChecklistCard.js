const ChecklistCard = () => {
  return (
    <div className="mx-auto w-1/2 p-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Checklist Title
      </h5>
      <p className="mb-3 font-light text-gray-700 dark:text-gray-400">
        Checklist Created Time Here
      </p>
      <div>
        <input
          type="text"
          id="small-input"
          className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button className="inline-flex items-center mt-2 mr-2 py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Complete
        </button>
        <button className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Delete
        </button>
      </div>
      <button className="inline-flex items-center mt-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
      </button>
    </div>
  )
}

export default ChecklistCard
