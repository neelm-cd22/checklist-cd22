import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ChecklistCard from 'src/components/ChecklistCard/ChecklistCard'
import NavigationLayout from 'src/layouts/NavigationLayout/NavigationLayout'

const ChecklistPage = () => {
  return (
    <>
      <MetaTags title="Checklist" description="Checklist page" />
      <NavigationLayout />
      <ChecklistCard />
    </>
  )
}

export default ChecklistPage
