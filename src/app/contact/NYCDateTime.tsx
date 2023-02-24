'use client'

import { useEffect, useState } from "react"
import { MdLocationOn } from 'react-icons/md'

export default function NYCDateTime() {
    const [dateValue, setDateValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateValue(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="flex gap-2 items-center">
            <p>{dateValue.toLocaleTimeString('en-us', { timeZone: 'America/New_York' })} </p>
            <div className="flex items-center"><MdLocationOn /> NYC</div>
        </div>
    )
}