import { Form, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import HomePageTemplatesCell from 'src/components/HomePageTemplatesCell/HomePageTemplatesCell'

const CREATE_TEMPLATE = gql`
  mutation CreateTemplateMutation($input: CreateTemplateInput!) {
    createTemplate(input: $input) {
      id
    }
  }
`

const HomePage = () => {
  const [create, { data }] = useMutation(CREATE_TEMPLATE, {
    onCompleted: () => {
      let templateId = data.createTemplate.id
      navigate(routes.createTemplate({ id: templateId }))
    }
  })

  const onSubmit = (inputData) => {
    create({
      variables: {
        input: {
          title: inputData.title
        }
      }
    })
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Form className="new-template-creator" onSubmit={onSubmit} >
        <TextField name="title" placeholder="Create template here" />
        <Submit>+</Submit>
      </Form>

      <div className="all-templates">
        <h2 className="all-templates-title">Templates</h2>
        <HomePageTemplatesCell />
        <div className="template-list">
          <div className="template-card">How to wash a car</div>
          <div className="template-card">How to wash a car</div>
          <div className="template-card">How to wash a car</div>
        </div>
      </div>
    </>
  )
}

export default HomePage
