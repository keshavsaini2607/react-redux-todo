import React from 'react'

function Link({ active, onClick, children}) {
    return (
        <button
            onClick={ onClick }
            disabled = {active}
            style={{
                marginLeft: '4px'
            }}
        >
            {children}
        </button>
    )
}

export default Link
