import { MetaTags } from '@redwoodjs/web'
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
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <NavigationLayout />
      <HomePageTemplatesCell />
      <HomePageChecklistsCell />
    </>
  )
}

export default HomePage
