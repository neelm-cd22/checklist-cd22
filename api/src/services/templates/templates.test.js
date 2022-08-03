import {
  templates,
  template,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} from './templates'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('templates', () => {
  scenario('returns all templates', async (scenario) => {
    const result = await templates()

    expect(result.length).toEqual(Object.keys(scenario.template).length)
  })

  scenario('returns a single template', async (scenario) => {
    const result = await template({ id: scenario.template.one.id })

    expect(result).toEqual(scenario.template.one)
  })

  scenario('creates a template', async () => {
    const result = await createTemplate({
      input: { title: 'String' },
    })

    expect(result.title).toEqual('String')
  })

  scenario('updates a template', async (scenario) => {
    const original = await template({ id: scenario.template.one.id })
    const result = await updateTemplate({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a template', async (scenario) => {
    const original = await deleteTemplate({ id: scenario.template.one.id })
    const result = await template({ id: original.id })

    expect(result).toEqual(null)
  })
})
