import React from 'react'

import '../../../css/Container.css'
import '../../../css/Spacers.css'
import './SaveTheDate.css'

const saveTheDate = (props) => {
    return (
        <div id='save-the-date' style={{ minHeight: `calc(100vh - ${props.toolbarHeight}px` }} >
            <div className='container'>
                <div className='padding-vertical-5' />
                <h1 className='white-text-with-shadow'>Save the Date</h1>
                <h2 className='white-text-with-shadow'>We're getting married!</h2>
                <div className='padding-vertical-5' />
                <div id='kb-circle-row'>
                    <div id='kb-circle'>
                        <span> Kat<br />&<br />Berti </span>
                        <div className='padding-vertical-2' />
                        <span> 1 June 2019 </span>
                    </div>
                </div>
                <div className='padding-vertical-5' />
            </div>
        </div >
    )
}

export default saveTheDate