import React from 'react'
import  { useParams } from 'react-router-dom';

const ClaimDetail = () => {
    const {id} = useParams()
  return (
    <div>
        Claim Detail: {id}

      
    </div>
  )
}

export default ClaimDetail
