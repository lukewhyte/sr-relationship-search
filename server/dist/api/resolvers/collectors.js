"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("../../common/winston");
const utilities_1 = require("./utilities");
const collectorsResolver = {
    Query: {
        collectors: async (_, args) => {
            try {
                const salesByTarget = await (0, utilities_1.getSalesByTarget)(args.targetAddress);
                const collectorMap = new Map();
                salesByTarget.forEach((sale) => {
                    const { buyer, nft, seller } = sale;
                    // Assure the artist is the NFT creator and that they're not selling it themselves (Rare pass, etc)
                    if (nft.creator.userAddress !== args.targetAddress || seller.userAddress === buyer.userAddress) {
                        return;
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
                        });
                    }
                });
                return [...collectorMap.values()].map((collector) => {
                    const nfts = [...collector.nfts.values()];
                    return Object.assign(collector, { nfts });
                });
            }
            catch (err) {
                winston_1.logger.error(err);
                return [];
            }
        }
    }
};
exports.default = collectorsResolver;
