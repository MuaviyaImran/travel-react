import React from 'react'

function Title({span, header, align = 'center'}) {
    return (
        <div className={`text-${align} mb-10`}>
            <span className='text-sm font-bold text-red-500 drop-shadow-md'>{span}</span>
            <h3 className='text-5xl font-bold text-gray-700 drop-shadow-lg uppercase'>{header}</h3>
        </div>
    )
}

export default Title