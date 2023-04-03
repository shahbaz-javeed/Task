import { Button } from '@mui/material'
import React from 'react'
import Card from './Card'

const ContentButtomSection = () => {
  return (
    <div className='Content_Buttom_Section'>
    <div className="Content_Buttom_Section_Head">
        <div className="flex_Start">
            <h1>St Judes Hospital</h1>
            <p>Sarasota,FL. 33178</p>
        </div>
        <div className="flex_Center">
            <div className="flex_Start">
                <h1>10</h1>
                <p>October</p>
            </div> -
            <div className="flex_Start">
                <h1>17</h1>
                <p>December</p>
            </div>
        </div>
        <div className="flex_Start">
            <h1>20 Rooms</h1>
            <p>10 Singles, 10 doubles</p>
        </div>
    </div>
    <Button variant="contained" className='Completed_Button'>COMPLETED</Button>
    <div className="Content_Card_Container">
        <Card/>
        <Card/>
        <Card/>
    </div>
</div>
  )
}

export default ContentButtomSection