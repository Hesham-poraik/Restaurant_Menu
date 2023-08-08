import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
        <div className='container'>
          <h2>مطعم جديد</h2>
          <div className='search'>
            <input type='text' placeholder='ابحث...'/>
            <button>ابحث</button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
