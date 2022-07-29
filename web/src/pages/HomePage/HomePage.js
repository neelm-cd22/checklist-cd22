import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const [create, { data }] = useMutation(CREATE_CHECKLIST, {
    onCompleted: () => {
      let templateId = data.createChecklist.id
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

      <form className="create-template-form" action="create-template">
        <input
          type="text"
          className="new-template"
          placeholder="new template name"
          aria-label="new template name"
        />
        <button className="btn-list" aria-label="create new template">+</button>
      </form>

      <div className="all-templates">
        <h2 className="all-templates-title">Templates</h2>
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
