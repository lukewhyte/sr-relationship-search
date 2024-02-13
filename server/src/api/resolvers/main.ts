import merge from 'lodash.merge'
import collectorsResolver from './collectors'
import userResolver from './user'
import creatorResolver from './creators'

const resolvers = merge(
  userResolver,
  collectorsResolver,
  creatorResolver,
)

export default resolvers
