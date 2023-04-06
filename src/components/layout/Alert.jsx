import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

import React from 'react'

function Alert() {
    const {alert} = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            svg will go here
        </p>
    )
}

export default Alert