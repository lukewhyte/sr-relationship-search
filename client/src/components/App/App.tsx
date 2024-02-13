import React, { useState } from 'react';
import Users from '../Users/Users';
import NavBar from '../NavBar/NavBar';

const App = () => {
  const [targetAddress, setTargetAddress] = useState<string>('')
  const [isArtistSearch, setIsArtistSearch] = useState<boolean>(true)

  return (
    <div className="bg-white w-full h-full">
      <NavBar
        targetAddress={targetAddress}
        setTargetAddress={setTargetAddress}
        isArtistSearch={isArtistSearch}
        setIsArtistSearch={setIsArtistSearch}
      />
      <Users
        targetAddress={targetAddress}
        isArtistSearch={isArtistSearch}
        setTargetAddress={setTargetAddress}
        setIsArtistSearch={setIsArtistSearch}
      />
    </div>
  );
}

export default App;
