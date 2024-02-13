import React from 'react'
import { Nft } from '../interfaces'

const CardArtworks = ({
  nfts,
}: {
  nfts: Nft[]
}) => {
  const firstRow = nfts.slice(0, 6)
  const secondRow = nfts.slice(6, 10)
  const remainder = nfts.slice(10).length

  return (
    <div className='py-[9px] flex flex-col justify-start items-start'>
      <div className='py-[9px] flex justify-start items-center'>
        {firstRow.map((nft: Nft, idx: number) => (
          <div key={idx} className='
            w-[42px]
            h-[42px]
            rounded-lg
            overflow-hidden
            relative
            mr-[4px]
          '>
            <img
              alt={nft.metadata.title}
              loading='lazy'
              decoding='async'
              src={nft.metadata.proxyImageSmallUri}
              className='object-cover h-full w-full align-middle'
            />
          </div>
        ))}
      </div>
      <div className='py-[9px] flex justify-start items-center min-h-[60px]'>
        {secondRow.length > 0 && secondRow.map((nft: Nft, idx: number) => (
          <div key={idx} className='
            w-[42px]
            h-[42px]
            rounded-lg
            overflow-hidden
            relative
            mr-[4px]
          '>
            <img
              alt={nft.metadata.title}
              loading='lazy'
              decoding='async'
              src={nft.metadata.proxyImageSmallUri}
              className='object-cover h-full w-full align-middle'
            />
          </div>
        ))}
        {remainder > 0 && (
          <p className='
            font-founders-grotesk-regular
            text-[18px]
            leading-[24px]
            my-0
            ml-[15px]
            text-[rgb(117, 117, 117)]
          '>
            {`+${remainder}`}
          </p>
        )}
      </div>
    </div>
  )
}

export default CardArtworks
