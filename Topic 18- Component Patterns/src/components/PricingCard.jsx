import React from 'react'

const PricingCard = ({text, color}) => {
  return (
    <div>
    <p style={{background: color, padding: "10px 20px", borderRadius: "8px", border: "none", display:"inline-flex"}}>{text}</p>
    </div>
  )
}

export default PricingCard