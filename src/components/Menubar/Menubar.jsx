import React, { useContext } from 'react'
import './Menubar.css'
import { cardlistContext } from "../../App"

export const Menubar = () => {

    const { cardlist, cardlistDispatch } = useContext(cardlistContext)

    return (
        <div className="menu-bar">
            {
                cardlist.length == 0 ? <p>Cart is Empty</p> : <p>You have {cardlist.length} in the Cart</p>
            }
        </div>
    )
}
