import React from 'react'

const Filter = ({cat, filter}) => {
  return (
    <div className='filter'>
      <h1>قائمة الطعام</h1>
      <div className='category'>
        {cat.length>=1
          ?cat.map((e, n)=><button key={n} onClick={()=> filter(e)}>{e}</button>)
          : <h3>لا يوجد تصنيفات</h3>}
      </div>
    </div>
  )
}

export default Filter
