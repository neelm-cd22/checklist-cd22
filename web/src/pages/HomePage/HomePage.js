import { Form, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import HomePageTemplatesCell from 'src/components/HomePageTemplatesCell/HomePageTemplatesCell'
import HomePageChecklistsCell from 'src/components/HomePageChecklistsCell/HomePageChecklistsCell'
import NavigationLayout from 'src/layouts/NavigationLayout/NavigationLayout'

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
      <NavigationLayout />
      <HomePageTemplatesCell />
      <HomePageChecklistsCell />
    </>
  )
}

export default HomePage
