export const QUERY = gql`
  query HomePageTemplatesQuery {
    templates {
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

export const Success = ({ templates }) => {
  return templates.map((template) => (
    <homePageTemplatesCell key={template.key}>
      <div>
        {template.title}
      </div>
    </homePageTemplatesCell>
  ))
}
