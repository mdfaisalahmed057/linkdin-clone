import React from 'react'
import './Widget.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
 import InfoIcon from '@mui/icons-material/InfoOutlined';
function Widget() {
    

  return (
    <div className="widgets">
       <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <InfoIcon/>
       </div>
       <div className='wigets__article'>
        <div className='widgets__articleleft'>
        <FiberManualRecordIcon/>
        </div>
        <div className='widgets__articleRight'>
        <h4>heading</h4>
        <p>ubtitle</p>
        </div>
        </div>
      
        </div>

  )
}

export default Widget