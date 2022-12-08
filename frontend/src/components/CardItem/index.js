import classNames from "classnames/bind";
import styles from "./CardItem.module.scss"
import { Link } from "react-router-dom";
import{AiFillStar} from "react-icons/ai"
import { useState } from "react";
import {formatNumberPrice,formatURL} from "../../assets"
import { useSelector, useDispatch } from "react-redux";
import { changeInformationPage } from "../../redux/reducers/InformationProductPage";
const cx=classNames.bind(styles)
function CardItem(props) {
    const [colorNameProduct, setColorNameProduct] = useState("black");

    const [amarginTop, setAmarginTop] = useState(0);
    const [show,setShow]=useState(props.data?props.data:{})
    const dispatch=useDispatch()
    const handleSetStore=()=>{
        const action=show
        dispatch(changeInformationPage(action))
        window.scrollTo(0,0) 
        
    }
    return (  
        <Link onClick={()=>handleSetStore()} to={`/${formatURL(show.name_product)}-${formatURL(show.code)}`} className={cx("wrapper")} onMouseOver={()=>{
            setColorNameProduct("red")
            setAmarginTop(0)
        }}
        onMouseOut={()=>{
            setColorNameProduct("black")
            setAmarginTop(0)
        }}
        >
            {show.img_product?<div style={{
                        paddingTop:`${amarginTop}px`
                    }} className={cx("img-product")}>
                <img className={cx("img")}
                    
                    src={show.img_product?show.img_product[0]:""}/>
            </div>:<></>}
            <div className={cx("information-product")}>
                {show.goodwill?
                    <div className={cx("goodwill-product")}>{show.goodwill}</div>
                :<></>}
                <div style={{
                    color:colorNameProduct
                }} className={cx("name-product")}>
                    {show.name_product}
                </div>
                <div className={cx("other-information")}>
                    Online giá rẻ
                </div>
                <div className={cx("price-product")}>
                    <div className={cx("price")}>
                        {formatNumberPrice(show.price*(100-show.sale)/100)}
                    </div>
                    {show.sale?
                    
                        
                        <div className={cx("sale")}> -{show.sale}%</div>
                    
                    :<></>}
                </div>
                <div className={cx("gift")}>

                </div>
                <div className={cx("rate-product")}>
                    {1?
                        <><div className={cx("rate-point")}>
                           {show.rate_point}<AiFillStar/>
                        </div>
                        <div className={cx("rate-quantity")}>
                            {`(${show.rate_quantity})`}
                        </div></>:<></>
                    }
                </div>
                  
            </div>
        </Link>
    );
}

export default CardItem;