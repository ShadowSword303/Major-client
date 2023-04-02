import React from 'react'
import Style from './css/Loader.module.css'
const Loader = () => {
    return (
        <div class={Style.loading}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
  )
}

export default Loader
