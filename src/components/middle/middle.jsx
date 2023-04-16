import React from 'react'
import './middle.scss'

const Middle = () => {
  return (
    <div className='middle'>
        <div className="m-cont">
            <div className="search-b">
                <div className="icon">
                    <img src="./imgs/left.svg" alt="" />
                </div>
                <div className="search">
                    <img src="./imgs/search.svg" alt="" />
                    <input placeholder='Search' type="search" />
                </div>
            </div>
            <div className="followers">
                <div className="yux">
                    <h1>Followers</h1>
                </div>
                <div className="asa">
                    <img src="./imgs/1.svg" alt="" />
                    <img src="./imgs/2.svg" alt="" />
                    <img src="./imgs/3.svg" alt="" />
                    <img src="./imgs/4.svg" alt="" />
                    <img src="./imgs/5.svg" alt="" />
                    <img src="./imgs/6.svg" alt="" />
                    <img src="./imgs/7.svg" alt="" />
                    <img src="./imgs/8.svg" alt="" />
                    <img src="./imgs/9.svg" alt="" />
                    <img src="./imgs/10.svg" alt="" />
                    <img src="./imgs/11.svg" alt="" />
                    <h1>+999</h1>
                    <img src="./imgs/12.svg" alt="" />
                </div>
            </div>
            <div className="docs">
                <h1>Recent Documents</h1>
                <h1>History Documents</h1>
                <h1>My Favorites</h1>
            </div>
            <div className="big-imgs">
                <div className="uppe">
                    <img src="./imgs/ev.svg" alt="" />
                    <img src="./imgs/ghost.svg" alt="" />
                </div>
                <div className="defne">
                    <img src="./imgs/green.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Middle