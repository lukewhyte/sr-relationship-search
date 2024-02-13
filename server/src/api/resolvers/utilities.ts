import apolloClient from "../../protocol-api/client"
import { GET_SALES_BY_TARGET, GET_USER } from "../../protocol-api/query"
import { ProtocolSalesByTarget, ProtocolUser } from "../interfaces"

export const getSalesByTarget = async (
  targetAddress: string
): Promise<ProtocolSalesByTarget[]> => {
  const result = await apolloClient.query({
    query: GET_SALES_BY_TARGET,
    variables: { targetAddresses: [targetAddress] },
  });

  return result.data.salesByTarget
}

export const getUser = async (
  targetAddress: string
): Promise<ProtocolUser | null> => {
  const result = await apolloClient.query({
    query: GET_USER,
    variables: { userAddresses: [targetAddress] },
  });

  return result.data.user.length ? result.data.user[0] : null
}
