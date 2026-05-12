import React from 'react'
import { useParams } from 'react-router-dom'

const PolicyDetail = () => {
    const {id} = useParams()
  return (
    <div>
        Policy id: {id}
      
    </div>
  )
}

export default PolicyDetail
