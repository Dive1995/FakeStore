import React, { useState } from 'react'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link, useParams, useHistory} from 'react-router-dom'
import Alert from './Alert'
import {addToCart} from './redux/productSlice'


function SingleProduct() {
    const {id} = useParams()
    const history = useHistory()
    const products = useSelector(state => state.products.products)
    const product = products.filter(prod => prod.id == id)
    const cartCountRef = useRef();
    const dispatch = useDispatch()
    const [alert,setAlert] = useState({status:false, type:'', msg:''})


    const addItemToCart = (id) => {
        if(cartCountRef.current.value){
            dispatch(addToCart({id:id, count:cartCountRef.current.value}))
            setAlertFunction(true, "success", "Item succesfully added to cart.")
        }else{
            setAlertFunction(true,"danger","please Enter number of items you want !!")
        }
    }

    const setAlertFunction = (status,type,msg) => {
        setAlert({status,type,msg})
    }

    console.log(alert);
    return (
        <div className="single-product">
            <div className="back">
            <a onClick={() => history.goBack()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></a>
            </div>
            {alert.status && <Alert removeAlert={setAlertFunction} alert={alert}/>}
            {product.map(item => {
                return <div className="single-product-item" key={id}>
                    <div className="single-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="single-details">
                        <h3>{item.title}</h3>
                        <h4 className="price">$ {item.price}</h4>
                        <p>{item.description}</p>
                        <div className="add-to-cart">
                        <form>

                            <input autoFocus placeholder="1" type="number" required min="1" max='10' ref={cartCountRef} />
                        </form>
                            <button className="btn cart-btn" onClick={() => addItemToCart(id)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> </button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default SingleProduct
