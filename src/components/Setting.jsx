  import React from 'react'
  import Style from './css/setting.module.css'
  import Theme from 'src/utils/Theme'
  const Setting = () => {
    return (
      <div class={Style.Setting}>
        <div class={Style.box}>
          <h1>Theme</h1>
          <Theme />
        </div>
        <div class={Style.box}>
          <h1>Heading 2</h1>
          <p>Some text here</p>
        </div>
        <div class={Style.box}>
          <h1>Heading 3</h1>
          <p>Some text here</p>
        </div>
        <div class={Style.box}>
          <h1>Heading 4</h1>
          <p>Some text here</p>
        </div>
      </div>
    )
  }

  export default Setting
