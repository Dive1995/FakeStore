import React, { useEffect } from 'react'

function Alert({alert, removeAlert}) {
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        },3000)

        return () => clearTimeout(timeout)
    },[alert])

    return (
        <div>
            <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
        </div>
    )
}

export default Alert