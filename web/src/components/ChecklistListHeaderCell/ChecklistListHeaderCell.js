export const QUERY = gql`
  query FindChecklistListHeaderQuery($id: Int!) {
    checklistListHeader: checklist(id: $id) {
      id
      title
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ checklistListHeader }) => {
  return (
    <checklistListHeader key={checklistListHeader.id}>
      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {checklistListHeader.title}
      </h5>
      <p className="mb-3 font-light text-gray-700 dark:text-gray-400">
        {checklistListHeader.description}
      </p>
    </checklistListHeader>
  )
}
