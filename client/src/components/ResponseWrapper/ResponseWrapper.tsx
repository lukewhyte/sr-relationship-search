import React, { ReactNode } from 'react';
import loading from './loading.svg'
import { Relationship } from '../interfaces';

export interface RequestResponse<DataObj> {
  state: 'loading' | 'error' | 'success' | 'ready'
  data: DataObj[]
  errorMsg: string
}

const ResponseWrapper = ({
  response,
  noData,
  children
}: {
  response: RequestResponse<Relationship>
  noData: string
  children: ReactNode
}) => {
  if (response.state === 'loading') {
    return (
      <div className='w-full min-h-[200px] flex justify-center items-center px-[10px]'>
        <img
          alt='Loading'
          loading='lazy'
          decoding='async'
          src={loading}
          className='w-[100px]'
        />
      </div>
    )
  }

  if (response.state === 'error') {
    return (
      <div className='w-full min-h-[200px] flex justify-center items-center px-[10px]'>
        <p className='
          text-center
          md:max-w-[60%]
          lg:max-w-[40%]
        '>Oops, there's been an error: {response.errorMsg}</p>
      </div>
    )
  }

  if (response.state === 'ready') {
    return <div className='w-full min-h-[200px] flex flex-col justify-start items-center py-[80px] px-[5%] md:px-[15%]'>
      <h2 className='font-founders-grotesk-medium text-[34px] leading-[32px] pb-[42px] text-center'>Welcome to SuperRare artist and collector explorer</h2>
      <p className='font-founders-grotesk-regular text-[24px] leading-[32px] pb-[28px] text-center'>This is just something we're playing around with and likely littered with bugs so don't get too excited or mad.</p>
      <p className='font-founders-grotesk-regular text-[24px] leading-[32px] pb-[28px] text-center'>Enter an Ethereum address in the textbox then click the magnifying glass. If the toggle is set to "Artist" 
        the app will return a list of all that artist's collectors (including those who've since sold the artwork).
        If the toggle is set to "Collector" the app will return a list of all the artists ever collected by that address.</p>
      <p className='font-founders-grotesk-regular text-[24px] leading-[32px] pb-[28px] text-center'>After running the search, click on any user avatar to see results for their address.</p>
    </div>
  }

  if (response.data.length === 0) {
    return (
      <div className='w-full min-h-[200px] flex justify-center items-center px-[10px]'>
        <p className='
          text-center
          md:max-w-[60%]
          lg:max-w-[40%]
        '>{noData}</p>
      </div>
    )
  }

  return <>{children}</>
}

export default ResponseWrapper
