import React, {useState} from 'react'

const Burger = ()=>{
    const [buttonClicked, setButtonClicked] = useState(false)

    return(
        <button className='burger' onClick={
            ()=>setButtonClicked(!buttonClicked)
        }>
            <div className={buttonClicked? 'burger-line transition-burger':'burger-line' }></div>
            <div className={buttonClicked? 'burger-line transition-burger':'burger-line' }></div>
            <div className={buttonClicked? 'burger-line transition-burger':'burger-line' }></div>
        </button>
    )
}

export default Burger