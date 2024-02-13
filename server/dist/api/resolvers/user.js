"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("../../common/winston");
const utilities_1 = require("./utilities");
const userResolver = {
    Query: {
        user: async (_, args) => {
            try {
                const user = await (0, utilities_1.getUser)(args.targetAddress);
                if (!user) {
                    return null;
                }
                return {
                    isCollector: !!user.isCollector,
                    isCreator: !!user.isCreator,
                    userAddress: user.userAddress,
                    userAvatarUri: user.userAvatarUri || '',
                    userName: user.userName || '',
                    userProfileName: user.userProfileName || '',
                };
            }
            catch (err) {
                winston_1.logger.error(err);
                return null;
            }
        }
    }
};
exports.default = userResolver;
