import React from 'react'
import './left.scss'

const Left = () => {
  return (
    <div className='left'>
        <div className="profile">
          <img src="./imgs/pfp.svg" alt="" />
          <h1>YICHA.</h1>
        </div>
        <div className="btns">
          <div className="btn">
            <img src="./imgs/board.svg" alt="" />
            <h1>Indicator Board</h1>
          </div>
          <div className="btn">
            <img src="./imgs/files.svg" alt="" />
            <h1>Projects</h1>
          </div>
          <div className="btn">
            <img src="./imgs/calendar.svg" alt="" />
            <h1>Calendar</h1>
          </div>
          <div className="btn">
            <img src="./imgs/chat.svg" alt="" />
            <h1>Conversation</h1>
          </div>
          <div className="btn">
            <img src="./imgs/task.svg" alt="" />
            <h1>Tasks</h1>
          </div>
          <div className="btn">
            <img src="./imgs/filter.svg" alt="" />
            <h1>Settings</h1>
          </div>
        </div>
        <div className="big-btn">
          <h1>Add resources</h1>
        </div>
    </div>
  )
}

export default Left