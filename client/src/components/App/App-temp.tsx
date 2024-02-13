import React, { useState } from 'react';
// import apolloClient from '../../api/client';
// import { isAddress } from 'web3-validator';
// import { GET_COLLECTORS } from '../../api/query';
// import Input from '../Input/Input';
// import Collectors from '../Collectors/Collectors';

// export interface SaleByTarget {
//   buyer: {
//     userAddress: string
//   }
// }

// export interface Response {
//   state: 'loading' | 'error' | 'success' | 'ready'
//   data: string[]
//   errorMsg: string
// }

// const extractCollectorAddresses = (salesByTarget: (SaleByTarget | null)[]) => {
//   return salesByTarget
//     .filter((saleByTarget: SaleByTarget | null) => saleByTarget)
//     .map((saleByTarget: SaleByTarget | null) => (saleByTarget as SaleByTarget).buyer.userAddress)
// }

// const App = () => {
//   const [targetAddress, setTargetAddress] = useState<string>('')
//   const [response, setResponse] = useState<Response>({
//     state: 'loading',
//     data: [],
//     errorMsg: '',
//   })

//   const fetchData = async (targetAddress: string) => {
//     setResponse({ ...response, state: 'loading' })
//     try {
//       const result = await apolloClient.query({
//         query: GET_COLLECTORS,
//         variables: { targetAddresses: [targetAddress] },
//       })
//       setResponse({
//         ...response,
//         state: 'success',
//         data: extractCollectorAddresses(result.data.salesByTarget),
//       })
//     } catch(error: any) {
//       setResponse({ ...response, state: 'error', errorMsg: error.message })
//     }
//   }

//   const onSearchClick = async () => {
//     if (!isAddress(targetAddress)) {
//       return 
//     }

//     await fetchData(targetAddress)
//   }

//   return (
//     <div className="App">
//       <Input
//         targetAddress={targetAddress}
//         setTargetAddress={setTargetAddress}
//         handleClick={onSearchClick}
//       />
//       <Collectors response={response} />
//     </div>
//   );
// }

const App = () => <div></div>

export default App;
