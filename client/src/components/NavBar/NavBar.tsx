import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'
import logoSm from '../../assets/logo-sm.svg'
import search from '../../assets/search.svg'

const NavBar = ({
  targetAddress,
  setTargetAddress,
  setIsArtistSearch,
  isArtistSearch
}: {
  targetAddress: string
  setTargetAddress: Dispatch<SetStateAction<string>>
  setIsArtistSearch: Dispatch<SetStateAction<boolean>>
  isArtistSearch: boolean
}) => {
  const [inputtedAddress, setInputtedAddress] = useState<string>('');
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth)

  const handleClick = () => {
    setTargetAddress(inputtedAddress)
  }

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    setInputtedAddress(targetAddress)
  }, [targetAddress])

  return (
    <div className='w-full border-b border-black flex justify-center'>
      <div className='flex h-[64px] items-center justify-between px-8 container'>
        <a href='https://superrare.com' className='relative h-[18px] w-12 sm:w-32'>
          <img
            alt='SuperRare logo'
            loading='lazy'
            decoding='async'
            className='duration-300 hover:scale-95'
            src={innerWidth >= 640 ? logo : logoSm}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100',
              inset: '0px',
              color: 'transparent',
            }}
          />
        </a>
        <div className='flex items-center justify-center gap-x-4 lg:gap-x-6 relative'>
          <label className='relative inline-flex items-center cursor-pointer'>
            <input
              className='sr-only peer'
              value='is-creator'
              type='checkbox'
              onChange={(e) => setIsArtistSearch(e.target.checked)}
              checked={isArtistSearch}
            />
            <div className="
              peer
              rounded-full
              outline-none
              duration-100
              after:duration-500
              w-[3.75rem]
              h-7
              bg-black
              before:content-['COLLECTOR']
              before:flex
              before:justify-end
              before:items-center
              before:text-white
              before:text-[0.5rem]
              before:px-[0.2rem]
              before:h-7
              peer-checked:before:content-['ARTIST']
              peer-checked:before:justify-start
              after:absolute
              after:outline-none
              after:rounded-full
              after:h-6
              after:w-6
              after:bg-white
              after:top-0.5
              after:left-0.5
              after:flex
              after:justify-center
              after:items-center
              after:opacity-70
              peer-checked:after:opacity-100
              peer-checked:after:translate-x-[2rem]
              peer-checked:after:border-white
            "></div>
          </label>
          <input
            className='p-[4px] md:p-[8px] rounded-[4px] border border-slate-300 bg-slate-50 min-w-[100px] md:min-w-[300px]'
            value={inputtedAddress}
            onChange={e => setInputtedAddress(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleClick()
              }
            }}
            placeholder='Enter address...'
          />
          <div 
            className='
              bg-slate-50
              h-[28px]
              w-[28px]
              md:h-[32px]
              md:w-[32px]
              absolute
              left-[calc(100%-30px)]
              md:left-[calc(100%-38px)]
              flex
              justify-center
              items-center
              cursor-pointer
            '
            onClick={handleClick}
          >
            <img
              alt='Search'
              loading='lazy'
              decoding='async'
              src={search}
              className='
                h-[18px]
                md:h-[20px]
                w-auto
              '
            />
          </div>
          {/* <button
            className='
              flex
              items-center
              justify-center
              gap-x-3
              rounded-md
              duration-300
              bg-black
              text-white
              hover:text-typography-grey-2
              focus:text-typography-grey-1
              disabled:bg-day-grey-2
              disabled:text-typography-grey-1
              border-0
              disabled:hover:text-typography-grey-1
              text-xs
              md:text-base
              h-[32px]
              md:h-[40px]
              px-4
              md:px-6
              uppercase
            '
            type='button'
            onClick={handleClick}
          >SEARCH</button> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar
