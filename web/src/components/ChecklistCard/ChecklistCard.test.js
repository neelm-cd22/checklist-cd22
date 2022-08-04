import { render } from '@redwoodjs/testing/web'

import ChecklistCard from './ChecklistCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChecklistCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChecklistCard />)
    }).not.toThrow()
  })
})
