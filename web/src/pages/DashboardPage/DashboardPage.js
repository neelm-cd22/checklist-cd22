import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ChecklistCell from 'src/components/ChecklistCell/ChecklistCell'
import TemplatesCell from 'src/components/TemplatesCell/TemplatesCell'
import NavigationLayout from 'src/layouts/NavigationLayout/NavigationLayout'

const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />
      <NavigationLayout />
      <TemplatesCell />
      <ChecklistCell />
    </>
  )
}

export default DashboardPage
