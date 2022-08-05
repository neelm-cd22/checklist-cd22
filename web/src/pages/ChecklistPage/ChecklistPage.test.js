import { render } from '@redwoodjs/testing/web'

import ChecklistPage from './ChecklistPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChecklistPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChecklistPage />)
    }).not.toThrow()
  })
})
