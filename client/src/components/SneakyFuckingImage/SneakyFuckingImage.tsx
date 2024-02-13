import React, { Dispatch, SetStateAction } from 'react'
import { User } from '../interfaces'

const SneakyFuckingImage = ({
  src,
  alt,
  className,
  style,
  user,
  setIsArtistSearch,
  setTargetAddress,
  isArtistSearch
}: {
  src: string
  alt?: string
  className?: string
  style?: {
    [key: string]: string
  }
  user: User
  setIsArtistSearch: Dispatch<SetStateAction<boolean>>
  setTargetAddress: Dispatch<SetStateAction<string>>
  isArtistSearch: boolean
}) => {
  const handleClick = () => {
    setTargetAddress(user.userAddress)
    setIsArtistSearch(!isArtistSearch)
  }

  return (
    <img
      alt={alt}
      src={src}
      title={`Click to see ${isArtistSearch ? 'artists collected by' : 'collectors of'} @${user.userName}`}
      className={`${className} cursor-pointer`}
      style={style}
      onClick={handleClick}
      loading='lazy'
      decoding='async'
    />
  )
}

export default SneakyFuckingImage
