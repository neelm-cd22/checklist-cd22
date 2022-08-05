import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTemplateListHeaderQuery($id: Int!) {
    templateListHeader: template(id: $id) {
      id
      title
      description
    }
  }
`

const UPDATE_TEMPLATE = gql`
  mutation UpdateTemplateMutation($templateId: Int!, $input: UpdateTemplateInput!) {
    updateTemplate(id: $templateId, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ templateListHeader }) => {
  const [updateTemplate] = useMutation(UPDATE_TEMPLATE)

  const onUpdate = (id, title) => {
    updateTemplate({
      variables: {
        templateId: id,
        input: {
          title: title,
        }
      },
      refetchQueries: ['FindTemplateListHeaderQuery']
    })
  }

  return (
    <templateListHeader key={templateListHeader.id}>
      <input
        type="text"
        className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        defaultValue={templateListHeader.title}
        onBlur={(e) => {
          let newTitle = e.target.value
          onUpdate(templateListHeader.id, newTitle)
        }}
      />
      <p className="mb-3 font-light text-gray-700 dark:text-gray-400">
        {templateListHeader.description}
      </p>
    </templateListHeader>
  )
}
