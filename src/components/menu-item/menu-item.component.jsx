import React from "react";
import './menu-item.style.scss'

export const MenuItem = ({title, imgUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image"
             style={{
                 backgroundImage: `url(${imgUrl})`,
             }}
        >

        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>

            <span className='subtitle'>SHOP</span>
        </div>
    </div>
)
