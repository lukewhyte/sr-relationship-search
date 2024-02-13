import { logger } from "../../common/winston"
import { MappedRelationship, Relationship } from "../interfaces";
import { getSalesByTarget } from "./utilities";

const creatorResolver = {
  Query: {
    creators: async (
      _: any,
      args: { targetAddress: string }
    ): Promise<Relationship[]> => {
      try {
        const salesByTarget = await getSalesByTarget(args.targetAddress)

        const creatorMap = new Map<string, MappedRelationship>()

        salesByTarget.forEach((sale) => {
          const { buyer, nft, seller } = sale
          const { creator, metadata } = nft

          // Assure the buyer is the NFT collector and that they're not selling it themselves (Rare pass, etc)
          if (buyer.userAddress !== args.targetAddress || seller.userAddress === buyer.userAddress) {
            return
          }

          if (!creatorMap.has(creator.userAddress)) {
            creatorMap.set(creator.userAddress, {
              target: {
                userAddress: creator.userAddress,
                userAvatarUri: creator.userAvatarUri || '',
                userName: creator.userName || '',
                userProfileName: creator.userProfileName || '',
                isCollector: !!creator.isCollector,
                isCreator: !!creator.isCreator,
              },
              source: {
                userAddress: buyer.userAddress,
                userAvatarUri: buyer.userAvatarUri || '',
                userName: buyer.userName || '',
                userProfileName: buyer.userProfileName || '',
                isCollector: !!buyer.isCollector,
                isCreator: !!buyer.isCreator,
              },
              nfts: new Map(),
            })
          }

          if (!creatorMap.get(creator.userAddress).nfts.has(nft.universalTokenId)) {
            creatorMap.get(creator.userAddress).nfts.set(nft.universalTokenId, {
              universalTokenId: nft.universalTokenId,
              metadata: {
                title: metadata.title || '',
                createdBy: metadata.createdBy || '',
                proxyImageSmallUri: metadata.proxyImageSmallUri || '',
                proxyImageMediumUri: metadata.proxyImageMediumUri || '',
              }
            })
          }
        })

        return [...creatorMap.values()].map((creator: MappedRelationship) => {
          const nfts = [...creator.nfts.values()]
          return Object.assign(creator, { nfts })
        })
      } catch(err) {
        logger.error(err)
        return []
      }
    }
  }
}

export default creatorResolver
