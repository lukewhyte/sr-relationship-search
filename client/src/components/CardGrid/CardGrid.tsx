import React, { Dispatch, SetStateAction } from 'react';
import { Relationship } from '../interfaces';
import Card from '../Card/Card';
import UserInfo from '../UserInfo/UserInfo';

const CardGrid = ({
  relationships,
  isArtistSearch,
  setIsArtistSearch,
  setTargetAddress
}: {
  relationships: Relationship[]
  isArtistSearch: boolean
  setIsArtistSearch: Dispatch<SetStateAction<boolean>>
  setTargetAddress: Dispatch<SetStateAction<string>>
}) => (
  <div className='
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-y-[48px]
    md:gap-y-[56px]
    lg:gap-y-[46px]
    md:gap-x-[18px]
    lg:gap-x-[22px]
    justify-center
    items-center
    max-w-screen-xl
    mx-auto
    px-8
  '>
    <UserInfo
      relationships={relationships}
      isArtistSearch={isArtistSearch}
      setTargetAddress={setTargetAddress}
      setIsArtistSearch={setIsArtistSearch}
    />
    {relationships.map((relationship: Relationship, idx: number) => (
      <Card
        setTargetAddress={setTargetAddress}
        relationship={relationship}
        key={idx}
        isArtistSearch={isArtistSearch}
        setIsArtistSearch={setIsArtistSearch}
      />
    ))}
  </div>
)

export default CardGrid
