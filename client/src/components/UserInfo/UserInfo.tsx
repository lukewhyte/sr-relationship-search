import React, { Dispatch, SetStateAction } from 'react'
import { Relationship } from '../interfaces'
import noAvatar from '../../assets/user-no-avatar.svg'
import SneakyFuckingImage from '../SneakyFuckingImage/SneakyFuckingImage'

const UserInfo = ({
  isArtistSearch,
  relationships,
  setIsArtistSearch,
  setTargetAddress
}: {
  isArtistSearch: boolean
  relationships: Relationship[]
  setIsArtistSearch: Dispatch<SetStateAction<boolean>>
  setTargetAddress: Dispatch<SetStateAction<string>>
}) => {
  const { source } = relationships[0]

  return (
    <div className='col-span-1 md:col-span-2 lg:col-span-3 flex justify-start items-start'>
      <div className='
        h-[64px]
        w-[64px]
        md:h-[96px]
        md:w-[96px]
        lg:h-[104px]
        lg:w-[104px]
        mr-[24px]
        rounded-full
        overflow-hidden
        relative
        max-w-screen-xl
        mb-[20px]
      '>
        <SneakyFuckingImage
          alt={`${source.userName} avatar`}
          src={source.userAvatarUri || noAvatar}
          isArtistSearch={isArtistSearch}
          className='object-cover h-full w-full align-middle'
          setTargetAddress={setTargetAddress}
          setIsArtistSearch={setIsArtistSearch}
          user={source}
        />
      </div>
      <div className='flex flex-col justify-between items-start'>
        <div className='
          text-[24px]
          leading-[28px]
          font-founders-grotesk-medium
          pb-[6px]
          mt-[5px]
        '>Viewing {isArtistSearch ? 'collectors for' : 'artists collected by'}:</div>
        <div className='
          text-[17px]
          leading-[20px]
          font-founders-grotesk-regular
          pb-[6px]
        '>
          {source.userProfileName && `${source.userProfileName}, `}
          <em>{`@${source.userName}`}</em>
        </div>
        <div className='
          text-[17px]
          leading-[20px]
          font-founders-grotesk-regular
        '>
          {`${relationships.length} ${isArtistSearch ? relationships.length === 1 ? 'collector' : 'collectors' : relationships.length === 1 ? 'artist' : 'artists'}`}
        </div>
      </div>
    </div>
  )
}

export default UserInfo
