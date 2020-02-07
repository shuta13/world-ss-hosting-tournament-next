import React, { useState } from 'react'

const Greet: React.FC = () => {
  const [greet, setGreet] = useState('Hi There!')
  const changeGreet = () => {
    if (greet === 'Hi There!') setGreet('Goodbye!')
    else setGreet('Hi There!')
  }
  return (
    <label onClick={ changeGreet }>
      { greet }
    </label>
  )
}

export default Greet