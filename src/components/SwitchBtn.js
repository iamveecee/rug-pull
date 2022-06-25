import React from 'react'


const SwitchBtn = () => {

    const lightToggle = (e) =>{
        e.preventDefault();        
        document.body.classList.toggle('bg-light-on');
        //document.body.classList.contains('bg-light-on') ? document.body.classList.remove('bg-light-on') : document.body.classList.add('bg-light-on');
        /* const parentEl = e.target.parentElement;
        parentEl.classList.contains('bg-light-on') ? parentEl.classList.remove('bg-light-on') : parentEl.classList.add('bg-light-on'); */
    }

  return (
    <div className="switch-btn" onClick={(e) =>{ lightToggle(e) }}>Red</div>
  )
}

export default SwitchBtn