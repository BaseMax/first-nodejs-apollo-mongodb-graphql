import { Cat } from './models/Cat'

export const resolvers = {
  Query: {
    hello: () => `Hello, World`,
    cats: () => {
      console.log('select from Cats')
      return Cat.find()
    }
  },
  Mutation: {
    createCat: async (_, {name}) => {
      const cat = new Cat({name})
      await cat.save()
      console.log(cat)
      return cat
    }
  }
}
