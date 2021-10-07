import React, {useContext}from 'react'
import { FirstName, LastName } from './App'
import CompC from './CompC'
export default function CompB() {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
    return (
        <div>
            <h1>My name is {fname} {lname}</h1>
            <CompC/>
        </div>
    )
}
