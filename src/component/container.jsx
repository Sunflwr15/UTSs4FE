import React from 'react'

function Container({children, color, className}) {
  return (
    <div className={`rounded-xl ${color} w-full ${className} p-5`}>
        {children}
    </div>
  )
}

export default Container