import React from 'react'

const ContentTopSection = () => {
  return (
    <div className='Content_Top_Section'>
        <div className="Content_Top_Section_Head">
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
        <div className="Content_Section_Button_Container">
        <div className="Content_Section_Button_Content">
            <div className="head_Button_Left">RECEIVED</div>
            <div className="head_Button_Center">NEGOTIATING</div>
            <div className="head_Button_Right">COMPLETED</div>
        </div>
        </div>
    </div>
  )
}

export default ContentTopSection