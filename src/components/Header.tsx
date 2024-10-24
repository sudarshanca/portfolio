import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 container mx-auto bg-gray-50'>
          <h3 className='text-gray-900'>logo</h3>
          <div className='flex items-center gap-4'>
            <div className='flex text-gray-900 gap-2'>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
                <a href="#">home</a>
            </div>
            <ThemeSwitcher />
            <button className='text-gray-900'> Download cv</button>
          </div>
      </div>
    </div>
  )
}

export default Header
