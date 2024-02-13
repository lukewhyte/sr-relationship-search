import React, { Dispatch, SetStateAction } from 'react';
import { Relationship } from '../interfaces';
import noAvatar from '../../assets/user-no-avatar.svg'
import SneakyFuckingImage from '../SneakyFuckingImage/SneakyFuckingImage';
import CardArtworks from './CardArtworks';

const Card = ({
  relationship,
  setIsArtistSearch,
  setTargetAddress,
  isArtistSearch
}: {
  relationship: Relationship
  setIsArtistSearch: Dispatch<SetStateAction<boolean>>
  setTargetAddress: Dispatch<SetStateAction<string>>
  isArtistSearch: boolean
}) => (
  <div className='flex flex-col justify-start'>
    <div className='
      max-w-[352px]
      lg:max-w-[305px]
      w-[calc(100vw-48px)]
      pt-[50px]
      pb-[25px]
      flex
      flex-col
      justify-center
      items-center
      border-x
      border-t
      border-[rgb(194, 201, 209)]
    '>
      <div className='
        h-[104px]
        w-[104px]
        rounded-full
        overflow-hidden
        relative
      '>
        <SneakyFuckingImage
          alt={`${relationship.target.userName} avatar`}
          src={relationship.target.userAvatarUri || noAvatar}
          isArtistSearch={isArtistSearch}
          className='object-cover h-full w-full align-middle'
          setTargetAddress={setTargetAddress}
          setIsArtistSearch={setIsArtistSearch}
          user={relationship.target}
        />
      </div>
      {relationship.target.userName && (
        <div className='
          text-center
          text-[21px]
          leading-[28px]
          pt-[16px]
          font-founders-grotesk-regular
        '>
          @{relationship.target.userName}
        </div>
      )}
    </div>
    <div className='
      w-full
      max-w-[352px]
      px-[16px]
      pb-[18px]
      flex
      flex-col
      justify-start
      border-x
      border-b
      border-[rgb(194, 201, 209)]
      bg-slate-100
    '>
        <div className='
          pt-[20px]
          text-[24px]
          leading-[28px]
          font-founders-grotesk-medium
          border-t
          border-[rgb(194, 201, 209)]
        '>Artworks collected: {relationship.nfts.length}</div>
        <CardArtworks nfts={relationship.nfts} />
    </div>
  </div>
)

export default Card
