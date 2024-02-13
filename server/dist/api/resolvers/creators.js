"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("../../common/winston");
const utilities_1 = require("./utilities");
const creatorResolver = {
    Query: {
        creators: async (_, args) => {
            try {
                const salesByTarget = await (0, utilities_1.getSalesByTarget)(args.targetAddress);
                const creatorMap = new Map();
                salesByTarget.forEach((sale) => {
                    const { buyer, nft, seller } = sale;
                    const { creator, metadata } = nft;
                    // Assure the buyer is the NFT collector and that they're not selling it themselves (Rare pass, etc)
                    if (buyer.userAddress !== args.targetAddress || seller.userAddress === buyer.userAddress) {
                        return;
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
                        });
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
                        });
                    }
                });
                return [...creatorMap.values()].map((creator) => {
                    const nfts = [...creator.nfts.values()];
                    return Object.assign(creator, { nfts });
                });
            }
            catch (err) {
                winston_1.logger.error(err);
                return [];
            }
        }
    }
};
exports.default = creatorResolver;
