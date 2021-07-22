import React, { useContext } from 'react'
import './Modals.css'
import { cardlistContext, dataModalContext, showContext } from '../../App'

export const Modals = ({ hide }) => {

    const { cardlist, cardlistDispatch } = useContext(cardlistContext)
    const { dataModal, dataModalDispatch } = useContext(dataModalContext)
    const { show, showDispatch } = useContext(showContext)


    function added() {


        let item = cardlist.find((i) => i.id === dataModal.id)
        if (item) {
            let arr = [...cardlist];
            let index = arr.findIndex((i) => i.id === dataModal.id);
            arr[index].count++;
            // setCardlist(arr);
            cardlistDispatch({ type: "ADD_CARD_LIST", payload: arr })
            hide();
        }
        else {
            // setCardlist([...cardlist, { id: dataModal.id, url: dataModal.url, description: dataModal.title, price: dataModal.price, count: 1 }])
            cardlistDispatch({ type: "ADD_CARD_LIST", payload: [...cardlist, { id: dataModal.id, url: dataModal.url, description: dataModal.title, price: dataModal.price, count: 1 }] })
            hide();
        }


    }


    return (
        <div className="modal">
            <div className="mains">
                <div className="section-left">
                    <img src={dataModal.url} alt="" />
                </div>
                <div className="section-right">
                    <div className="title">
                        <p>{dataModal.title}</p>
                        <button onClick={hide}>x</button>
                    </div>

                    <div className="des">
                        <p>{dataModal.des}</p>
                    </div>

                    <div className="addto">
                        <p>Price : ${dataModal.price}</p>
                        <button onClick={added}>Add To Card</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
