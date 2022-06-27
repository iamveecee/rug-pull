import React from 'react'

const SwitchBtn = () => {
  return (
    <div className="switch-btn" onClick={(e) =>{ document.body.classList.toggle('bg-light-on') }}></div>
  )
}

export default SwitchBtn