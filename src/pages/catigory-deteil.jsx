import React from 'react'
import { useParams } from 'react-router-dom'

export const CatigoryDeteil = () => {
    const {id} = useParams()
    console.log(id);
  return (
    <div></div>
  )
}
