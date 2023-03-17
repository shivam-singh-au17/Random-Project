import React, { useContext } from 'react'
import { firstName, lastName } from './MainCompo'

const CopyCompoThree = () => {
    const firstNaam = useContext(firstName);
    const lastNaam = useContext(lastName);
    return (
      <div>
        <h1>
          My Name Is {firstNaam} {lastNaam} From Mirzapur
        </h1>
      </div>
    );
}

export default CopyCompoThree
