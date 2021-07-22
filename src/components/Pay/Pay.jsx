import React, { useContext } from 'react'
import './Pay.css'
import { modeContext, cardlistContext } from '../../App'

export const Pay = () => {


    const { mode, modeDispatch } = useContext(modeContext)
    const { cardlist, cardlistDispatch } = useContext(cardlistContext)
    function change() {
        // setmode({
        //     show: true
        // })

        modeDispatch({
            type: "TRUE", payload: {
                show: true
            }
        })

    }
    let total = 0;
    cardlist.forEach(element => {
        total += element.price * element.count;
    });


    return (
        <div className="pay" >
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={change}>Proceed</button>
        </div >
    )

}
