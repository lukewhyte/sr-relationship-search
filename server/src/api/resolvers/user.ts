import { logger } from "../../common/winston"
import { User } from "../interfaces"
import { getUser } from "./utilities";

const userResolver = {
  Query: {
    user: async (
      _: any,
      args: { targetAddress: string }
    ): Promise<User | null> => {
      try {
        const user = await getUser(args.targetAddress)

        if (!user) {
          return null
        }

        return {
          isCollector: !!user.isCollector,
          isCreator: !!user.isCreator,
          userAddress: user.userAddress,
          userAvatarUri: user.userAvatarUri || '',
          userName: user.userName || '',
          userProfileName: user.userProfileName || '',
        }
      } catch(err) {
        logger.error(err)
        return null
      }
    }
  }
}

export default userResolver
