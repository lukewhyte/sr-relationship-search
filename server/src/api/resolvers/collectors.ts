import { logger } from "../../common/winston"
import { Relationship, MappedRelationship } from "../interfaces";
import { getSalesByTarget } from "./utilities";

const collectorsResolver = {
  Query: {
    collectors: async (
      _: any,
      args: { targetAddress: string }
    ): Promise<Relationship[]> => {
      try {
        const salesByTarget = await getSalesByTarget(args.targetAddress)

        const collectorMap = new Map<string, MappedRelationship>();

        salesByTarget.forEach((sale) => {
          const { buyer, nft, seller } = sale;

          // Assure the artist is the NFT creator and that they're not selling it themselves (Rare pass, etc)
          if (nft.creator.userAddress !== args.targetAddress || seller.userAddress === buyer.userAddress) {
            return
          }

          if (!collectorMap.has(buyer.userAddress)) {
            collectorMap.set(buyer.userAddress, {
              target: {
                userAvatarUri: buyer.userAvatarUri || '',
                userName: buyer.userName || '',
                userProfileName: buyer.userProfileName || '',
                userAddress: buyer.userAddress,
                isCollector: !!buyer.isCollector,
                isCreator: !!buyer.isCreator,
              },
              source: {
                userAvatarUri: nft.creator.userAvatarUri || '',
                userName: nft.creator.userName || '',
                userProfileName: nft.creator.userProfileName || '',
                userAddress: nft.creator.userAddress,
                isCollector: !!nft.creator.isCollector,
                isCreator: !!nft.creator.isCreator,
              },
              nfts: new Map(),
            });
          }

          if (!collectorMap.get(buyer.userAddress).nfts.has(nft.universalTokenId)) {
            collectorMap.get(buyer.userAddress).nfts.set(nft.universalTokenId, {
              universalTokenId: nft.universalTokenId,
              metadata: {
                title: nft.metadata.title || '',
                createdBy: nft.metadata.createdBy || '',
                proxyImageSmallUri: nft.metadata.proxyImageSmallUri || '',
                proxyImageMediumUri: nft.metadata.proxyImageMediumUri || '',
              },
            })
          }
        })

        return [...collectorMap.values()].map((collector: MappedRelationship) => {
          const nfts = [...collector.nfts.values()]
          return Object.assign(collector, { nfts })
        })
      } catch(err) {
        logger.error(err)
        return []
      }
    }
  }
}

export default collectorsResolver
