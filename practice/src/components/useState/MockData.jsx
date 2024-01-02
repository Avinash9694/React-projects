import React from 'react'
import Final from './Final'
export const arr = [
    {"id":1,"name":"John"},
    {"id":2,"name":"Ramesh"},
    {"id":3,"name":"Suresh"}
]
const MockData = () => {
  return (
    <Final arr={arr}/>
  )
}

export default MockData