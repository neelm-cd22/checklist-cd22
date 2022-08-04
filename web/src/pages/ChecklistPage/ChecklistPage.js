import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import NavigationLayout from 'src/layouts/NavigationLayout/NavigationLayout'

const ChecklistPage = () => {
  return (
    <>
      <MetaTags title="Checklist" description="Checklist page" />
      <NavigationLayout />
      <h1>ChecklistPage</h1>

      <p>
        Find me in
        <code>./web/src/pages/ChecklistPage/ChecklistPage.js</code>
      </p>

      <p>
        My default route is named
        <code>checklist</code>, link to me with `
        <Link to={routes.checklist()}>Checklist</Link>`
      </p>
    </>
  )
}

export default ChecklistPage
