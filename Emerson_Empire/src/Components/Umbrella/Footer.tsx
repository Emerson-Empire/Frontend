import React from 'react'

const Footer:React.FC = () => {


  const today= new Date()
  const year =today.getFullYear()
  return (
    <div className="flex justify-center items-center bg-[#1E0A4A] text-[#C9A84C] text-center"> 
      
   © {year}  &nbsp; EMERSON EMPIRE. All Right Reserve </div>
  )
}

export default Footer