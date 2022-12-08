import classNames from "classnames/bind";
import styles from "./ItemBuy.module.scss";
import { useState,useEffect } from "react";
import {RiCloseCircleFill} from "react-icons/ri"
import { Link } from "react-router-dom";
//from asset
import { formatNumberPrice } from "../../assets";
//from redux
import { useDispatch } from "react-redux";
import { changeAmount,removeProduct } from "../../redux/reducers/cart";
import { changeInformationPage } from "../../redux/reducers/InformationProductPage";

const cx=classNames.bind(styles)
function ItemBuy(props) {
    
    const data=props.data
    const [amount, setAmount] = useState(data.amount);
    const [price, setPrice] = useState(data.price);
    const dispatch=useDispatch()
    const handleSetStore=()=>{
        const action=data
        dispatch(changeInformationPage(action))
        window.scrollTo(0,0)  
    }
    const changeStore=(number)=>{
        const action=changeAmount({
            code:data.code,
            amount:number
        })
        dispatch(action)
    }
    const removeInStore=()=>{
        const action=removeProduct({
            code:data.code
        })
        dispatch(action)
        let newLocal=localStorage.getItem("code")
        while(newLocal.includes(`,${data.code}`)){
            newLocal=newLocal.replace(`,${data.code}`,'')
        }
        localStorage.setItem("code",newLocal)
    }
    const handleAmount=(number)=>{
        if(amount==1&&number<0){
            return
        }
        if(amount==99&&number>0){
            return
        }
        setAmount(amount+number)
        changeStore(amount+number)
    }
    return (           
        <div  className={cx("item")}>
            <Link to='/page' onClick={()=>handleSetStore()} className={cx("img-product")}>
                <img src={data.img_product?data.img_product[0]:""}></img>
            </Link>
            <Link to='/page' style={{color:"black"}} onClick={()=>handleSetStore()} className={cx("product-information")}>
                <div className={cx("name-product")}>
                    {data.name_product}
                </div>
                <div className={cx("other-information-product")}>
                    {data.sale}
                </div>
            </Link>
            <div className={cx("left-container")}>
                <div className={cx("price-one-product")}>
                    
                </div>
                <div className={cx("price-sale")}>
                    {formatNumberPrice(price)}
                </div>
                <div className={cx("amount-product")}>
                    <div style={amount==1?{color:"gray"}:{}} onClick={()=>handleAmount(-1)}>
                        -
                    </div>
                    <input className={cx("amount")}
                        type="text" value={amount}
                        onChange={(e)=>{
                            if(!isNaN(e.target.value)&&e.target.value<99){
                            setAmount(+e.target.value)
                            changeStore(e.target.value)
                            }
                            if(!e.target.value){
                                setAmount(1)
                                changeStore(1)
                            }
                            if(e.target.value>99){
                                setAmount(99)
                                changeStore(99)                     
                            }
                        }}
                        />
                
                    <div onClick={()=>{
                        handleAmount(1)
                        }}>
                        +
                    </div>
                    
                </div>
                <div className={cx("delete")}>
                    <div
                        onClick={()=>{
                            removeInStore()
                        }}
                        className={cx("container-delete")}>
                        <RiCloseCircleFill/>Xóa
                    </div>
                </div>
            </div>
        </div>
                
            
    );
}

export default ItemBuy;