import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/Locations")
                .then(res => res.json())
                .then ((locationData) => {
                    setLocation(locationData)
                })
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (location) => {
                        return <p key={`location--${location.id}`}>The address is {location.address}. 🏠</p>
                    }
                )
            }
        </> 
    )
}