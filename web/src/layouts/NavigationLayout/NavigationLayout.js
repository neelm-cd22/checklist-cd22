const NavigationLayout = ({ children }) => {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              className="mr-3 h-6 sm:h-9"
            >
              <circle cx="24" cy="24" r="21.5" fill="#E1F5FE"></circle>
              <path
                fill="#0277BD"
                d="M24,46C11.869,46,2,36.131,2,24S11.869,2,24,2c6.219,0,12.175,2.65,16.342,7.271 c0.186,0.205,0.169,0.521-0.036,0.706c-0.206,0.185-0.522,0.168-0.706-0.036C35.622,5.53,29.937,3,24,3C12.421,3,3,12.42,3,24 s9.421,21,21,21s21-9.42,21-21c0-2.299-0.369-4.56-1.098-6.72c-0.089-0.262,0.052-0.545,0.313-0.633 c0.268-0.088,0.546,0.052,0.634,0.314C45.613,19.224,46,21.592,46,24C46,36.131,36.131,46,24,46z"
              ></path>
              <path
                fill="#FFF"
                d="M24,45C12.421,45,3,35.58,3,24S12.421,3,24,3c5.834,0,11.454,2.458,15.419,6.743 c0.188,0.203,0.175,0.519-0.027,0.707c-0.203,0.187-0.52,0.176-0.707-0.028C34.909,6.341,29.557,4,24,4C12.972,4,4,12.972,4,24 s8.972,20,20,20s20-8.972,20-20c0-2.03-0.303-4.031-0.899-5.948c-0.082-0.264,0.065-0.544,0.329-0.626 c0.263-0.08,0.545,0.066,0.626,0.329C44.683,19.768,45,21.869,45,24C45,35.58,35.579,45,24,45z"
              ></path>
              <path
                fill="#64FFDA"
                d="M21.584,33.834c0.892,0.888,2.438,0.888,3.331,0l19.387-19.309c0.931-0.926,0.931-2.433,0-3.359 c-0.892-0.888-2.438-0.888-3.33,0L24.007,28.061c-0.399,0.398-1.116,0.398-1.516,0l-6.463-6.436 c-0.446-0.444-1.037-0.688-1.665-0.688s-1.22,0.244-1.665,0.688c-0.931,0.926-0.931,2.433,0,3.359L21.584,33.834z"
              ></path>
              <path
                fill="#0277BD"
                d="M23.249,35.005c-0.735,0-1.471-0.272-2.018-0.817v0l-8.886-8.85c-0.545-0.542-0.846-1.265-0.846-2.035 c0-0.769,0.301-1.491,0.846-2.033c1.077-1.074,2.954-1.076,4.035,0l6.463,6.436c0.205,0.204,0.606,0.205,0.81,0l16.966-16.896 c1.094-1.089,2.941-1.089,4.035,0c0.545,0.542,0.846,1.265,0.846,2.034c0,0.769-0.301,1.491-0.846,2.033L25.268,34.188 C24.721,34.733,23.984,35.005,23.249,35.005z M14.363,21.437c-0.495,0-0.961,0.193-1.312,0.542 c-0.355,0.354-0.552,0.824-0.552,1.325s0.195,0.972,0.551,1.325l8.886,8.851c0.699,0.695,1.927,0.696,2.626,0L43.949,14.17 c0.354-0.353,0.551-0.824,0.551-1.325s-0.195-0.972-0.551-1.325c-0.699-0.696-1.926-0.697-2.625,0L24.359,28.416 c-0.59,0.59-1.63,0.59-2.222,0l-6.462-6.436C15.324,21.629,14.858,21.437,14.363,21.437z"
              ></path>
              <path
                fill="#FFF"
                d="M13,23.804c-0.276,0-0.5-0.224-0.5-0.5c0-0.5,0.196-0.971,0.552-1.325c0.351-0.35,0.816-0.542,1.312-0.542 c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5c-0.229,0-0.443,0.089-0.606,0.25c-0.165,0.166-0.257,0.385-0.257,0.617 C13.5,23.581,13.276,23.804,13,23.804z"
              ></path>
              <path
                fill="#FFF"
                d="M26.161,27.828c-0.128,0-0.257-0.049-0.354-0.147c-0.194-0.196-0.194-0.512,0.002-0.708l14.07-14.013 c0.195-0.194,0.512-0.195,0.707,0.001c0.194,0.196,0.194,0.512-0.002,0.708l-14.07,14.013 C26.416,27.779,26.289,27.828,26.161,27.828z"
              ></path>
            </svg>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CheckList
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="hidden relative md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search a checklist..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search a checklist..."
              />
            </div>
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="DashboardPage"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  New Checklist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavigationLayout
