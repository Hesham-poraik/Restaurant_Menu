import React from 'react';
import Zoom from 'react-reveal';
const Main = (props) => {
  return (
    <div className='main'>
      <div className='container'>
        <Zoom>
          {props.children}
        </Zoom>
      </div>
    </div>
  )
}

export default Main
