import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import apolloClient from '../../api/client';
import { GET_COLLECTORS, GET_CREATORS } from '../../api/query';
import ResponseWrapper, { RequestResponse } from '../ResponseWrapper/ResponseWrapper';
import { Relationship } from '../interfaces';
import CardGrid from '../CardGrid/CardGrid';

const getNoData = (isArtistSearch: boolean) => {
  if (isArtistSearch) {
    return 'No collectors found for this address. Are you sure you entered the address correctly?'
  }
  return 'No collected artists found for this address. Are you sure you entered the address correctly?'
}

const Users = ({
  targetAddress,
  isArtistSearch,
  setTargetAddress,
  setIsArtistSearch
}: {
  targetAddress: string
  isArtistSearch: boolean
  setTargetAddress: Dispatch<SetStateAction<string>>
  setIsArtistSearch: Dispatch<SetStateAction<boolean>>
}) => {
  const noData = getNoData(isArtistSearch)

  const [response, setResponse] = useState<RequestResponse<Relationship>>({
    state: 'ready',
    data: [],
    errorMsg: '',
  })

  const getCollectors = async () => {
    if (targetAddress.trim().length > 0) {
      setResponse({ ...response, state: 'loading' })
      
      try {
        let relationships: Relationship[] = []

        if (isArtistSearch) {
          const result = await apolloClient.query({
            query: GET_COLLECTORS,
            variables: { targetAddress },
          })
          relationships = [...result.data.collectors]
        } else {
          const result = await apolloClient.query({
            query: GET_CREATORS,
            variables: { targetAddress },
          })
          relationships = [...result.data.creators]
        }

        setResponse({
          ...response,
          state: 'success',
          data: relationships.sort((a: Relationship, b: Relationship) => {
            return b.nfts.length - a.nfts.length;
          }),
        })
      } catch(error: any) {
        setResponse({ ...response, state: 'error', errorMsg: error.message })
      }
    }
  }

  useEffect(() => {
    getCollectors()
  }, [targetAddress, isArtistSearch])

  return (
    <ResponseWrapper response={response} noData={noData}>
      <div className='w-full min-h-[200px] flex justify-center items-center mt-[50px]'>
        <CardGrid
          relationships={response.data}
          isArtistSearch={isArtistSearch}
          setTargetAddress={setTargetAddress}
          setIsArtistSearch={setIsArtistSearch}
        />
      </div>
    </ResponseWrapper>
  )
}

export default Users
