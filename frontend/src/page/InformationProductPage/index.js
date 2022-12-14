import classNames from "classnames/bind";
import styles from "./InformationProductPage.module.scss";
import { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCartPlus,FaShippingFast, FaStar } from "react-icons/fa";
import { BsStar, BsTelephoneFill } from "react-icons/bs"
import { AiOutlineFileProtect } from "react-icons/ai"
import { formatNumberPrice } from "../../assets";
import  { addProduct } from "../../redux/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import Specifications from "../../components/Specifications";
import BrandPage from "../../components/BrandPage";
import { Link } from "react-router-dom";
const cx=classNames.bind(styles)

 
function InformationProductPage() {
    useEffect(() => {
        
    }, []);
    const [chooseImage, setChooseImage] = useState(0);
    const [amount, setAmount] = useState(1);
    const mainData=useSelector(state=>state.informationProductPage)
    const handleChooseImage=(number)=>{
        if(number>(listImage.length-1)){
            number=0
        }
        setChooseImage(number)
    }
    const handleAmount=(number)=>{
        if(amount==1&&number<0){
            return
        }
        if(amount==99&&number>0){
            return
        }
        setAmount(amount+number)
    }
    const dispath=useDispatch() 
    const AddToCart=()=>{
        localStorage.setItem("code",[localStorage.getItem("code"),mainData.code])
        localStorage.setItem("amount",[localStorage.getItem("amount"),amount])
        const action={...mainData,amount:amount}
        dispath(addProduct(action))
    }

    const listImage=mainData.img_product
    return (
        <div className={cx("wrapper")}>
            <div className={cx('container')}>
                <div className={cx("img-container")}>
                    <div className={cx("main-img")}>
                        <img src={listImage[chooseImage]}/>
                        <button
                            onClick={()=>{
                                handleChooseImage(chooseImage-1)
                            }}
                            className={cx("previous")}><GrPrevious/></button>
                        <button 
                            onClick={()=>{
                                handleChooseImage(chooseImage+1)
                            }}
                            className={cx("next")}><GrNext/></button>
                        
                    </div>
                    <div className={cx("point-choose-img")}>
                        {
                            listImage.map((item,index)=><div
                                key={index}
                                style={index==chooseImage?{backgroundColor:"gray"}:{}}
                                onClick={()=>setChooseImage(index)} 
                                className={cx("point")}></div>)
                        }
                    </div>
                    <div className={cx("list-img")}>
                        {
                            listImage.map((item,index)=>{
                                return(
                                    <div key={index} className={cx("item-img")}>
                                        <img
                                        style={index==chooseImage?{border:"1px rgb(253, 108, 29) solid"}:{}}  
                                        onClick={()=>{
                                            setChooseImage(index)
                                        }}
                                        src={item}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={cx("inf-container")}>
                    <div className={cx("name-product")}>
                       <h2>{mainData.name_product||""}</h2>
                       <div style={{fontSize:"12px"}}>Ch???o c???a gia ????nh</div>
                    </div>
                    <div className={cx("rate-product")}>
                        <div className={cx("rate-point")}>
                            {mainData.rate_point||""} <span style={{color:"red"}}><FaStar/><FaStar/><FaStar/><FaStar/></span>
                        </div>
                        <div className={cx("rate-quantity")}>
                            {mainData.rate_quantity||"5 "} ????nh Gi??
                        </div>
                        <div className={cx("amount-sell")}>
                            {mainData.amountSell||""} ???? b??n
                        </div>
                    </div>
                    <div className={cx("price-product")}>
                        <div className={cx("sell-price")}>{formatNumberPrice(mainData.price*(100-mainData.sale)/100)}</div>
                        {mainData.sale?
                            <div className={cx("cost")}>{formatNumberPrice(mainData.price)}</div>:""
                        }
                    </div>
                    <div class={cx("color")}>
                        
                    </div>
                    <div className={cx("status")}>
                        <pre>Tr???ng th??i:        {!mainData.status?"C??n h??ng":"H???t h??ng"}</pre>
                    </div>
                    <div className={cx("amount-container")}>
                        <div className={cx("title")}>S??? l?????ng:</div> 
                        <div className={cx("amount-product")}>
                        <div style={amount==1?{color:"gray"}:{}} onClick={()=>handleAmount(-1)}>
                            -
                        </div>
                        <input className={cx("amount")}
                            type="text" value={amount}
                            onChange={(e)=>{
                                if(!isNaN(e.target.value)&&e.target.value<99){
                                setAmount(+e.target.value)
                                }
                                if(!e.target.value){
                                    setAmount(1)
                                }
                                if(e.target.value>99){
                                    setAmount(99)                     
                                }
                            }}
                            />
                        <div onClick={()=>{
                            handleAmount(1)
                            }}>
                            +
                        </div>    
                    </div>
                    </div>
                    <div className={cx("button-container")}>
                        <Link to="/cart" onClick={()=>AddToCart()} className={cx("buy-now")}>
                            Mua ngay
                        </Link>
                        <div onClick={()=>AddToCart()} className={cx("add-to-cart")}>
                            <div className={cx("logo")}><FaCartPlus style={{fontSize:"18px"}}/></div>Th??m v??o gi???
                        </div>
                    </div>
                    <div className={cx("hotline")}>
                        <div className={cx("top-hotline")}>Hotline: 0982747639</div>
                        <div className={cx("bot-hotline")}>????? l???i s??? ??i???n tho???i ch??ng t??i s??? g???i cho b???n</div>
                    </div>
                    <div className={cx("other-information")}>
                        <div>
                            <img style={{width:"19px",marginRight:"12px"}} src="https://www.electrolux.vn/globalassets/settings/extra-services/cash-on-delivery-icon.svg"/>
                            Ch???p nh???n thanh khi giao h??ng
                        </div>
                        <div className={cx("shipping")}>
                            <FaShippingFast/>
                            Giao h??ng tr??n to??n qu???c
                        </div>
                        <div className={cx("protect")}>
                            <AiOutlineFileProtect/>
                            B???o h??nh ch??nh h??ng l??n t???i 2 n??m
                        </div>
                    </div>
                    <div className={cx("thanks")}>
                        <b style={{color:"green"}}>S??? h??i l??ng c???a qu??? kh??ch l?? th??nh c??ng c???a ch??ng t??i</b><br/>
                        ?????a ch???: C???ng c??ng nghi???p x?? Lai Vu, Kim Th??nh, H???i D????ng
                    </div>
                </div>
            </div>
            <div className={cx("accessory")}></div>
            <div className={cx("specification")}>
                <Specifications/>
                <BrandPage/>
            </div>
        </div>
    );
}

export default InformationProductPage;