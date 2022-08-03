import { db } from 'src/lib/db'

export const templates = () => {
  return db.template.findMany()
}

export const template = ({ id }) => {
  return db.template.findUnique({
    where: { id },
  })
}

export const createTemplate = ({ input }) => {
  return db.template.create({
    data: input,
  })
}

export const updateTemplate = ({ id, input }) => {
  return db.template.update({
    data: input,
    where: { id },
  })
}

export const deleteTemplate = ({ id }) => {
  return db.template.delete({
    where: { id },
  })
}

export const Template = {
  tasks: (_obj, { root }) =>
    db.template.findUnique({ where: { id: root.id } }).tasks(),
}
