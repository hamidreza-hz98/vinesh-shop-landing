import React from 'react';


const Container = ({ children, className="" }) => {
  return (
    <div className={`max-w-5xl mx-auto px-4 md:px-8 my-8 ${className}`}>
      { children }
    </div>
  )
}

export default Container