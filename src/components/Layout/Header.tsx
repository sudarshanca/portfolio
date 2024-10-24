import React from 'react'
import ThemeSwitcher from '../General/ThemeSwitcher'
import CustomButton from '../General/CustomButton'


const Header = () => {
  return (
    <div>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8'>
          <h3 className='text-gray-900'>logo</h3>
          <div className='hidden md:flex items-center gap-6'>
            <div className='flex text-gray-900 items-center gap-6'>
                <a href="#" className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>About</a>
                <a href="#" className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Work</a>
                <a href="#" className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Testimonials</a>
                <a href="#" className='text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600'>Contact</a>
            </div>
            <div className='h-6 w-0.5 bg-gray-100'></div>
            <ThemeSwitcher />
            <CustomButton 
            title='Download Cv'
            ContainerStyles=' bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800'
             />
          </div>
      </div>
    </div>
  )
}

export default Header
