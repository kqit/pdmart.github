import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { BiSearch, BiHelpCircle, BiPhone } from "react-icons/bi"
import {AiOutlineShoppingCart ,AiOutlineHome, AiOutlineClockCircle,
        AiOutlineMail, AiFillQuestionCircle, AiFillStar} from "react-icons/ai"
import {BsQuestionCircle, BsFillTelephoneFill} from "react-icons/bs"
import { useState } from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
const cx=classNames.bind(styles)
function Header() {
    const [showConsultingMenu, setshowConsultingMenu] = useState(false);
    const [showHotlineMenu, setshowHotlineMenu] = useState(false);
    const listProduct=useSelector(state=>state.cart.listProduct)
 
    const totalProduct=()=>{
        let sum=0
        listProduct.forEach((item)=>{
            sum=sum+item.amount
        })
        return sum
    }
    return(  
        <div className={cx("wrapper")}>
            <Link className={cx("logo")} to="/">
                <img src="https://f7-zpcloud.zdn.vn/2748930649776804191/0ac639d480f245ac1ce3.jpg"/>
            </Link>
            <div className={cx("search")}>
                <div className={cx("container-search")}>
                    <input className={cx("input-search")} type="text" placeholder="Bạn cần tìm..." />
                    <div className={cx("logo-search")}>
                        <BiSearch/>
                    </div>
                </div>
            </div>
            
            <Link to="/cart" className={cx("cart")}>
                <div className={cx("cart-container")}>
                    <div className={cx("logo-cart")}>
                        <AiOutlineShoppingCart/>
                        <div className={cx("number")}>
                            {
                                totalProduct()
                            }
                        </div>
                    </div>
                        <div className={cx("title")}>Giỏ hàng</div>
                </div>
            </Link>
            <div className={cx("customer-consulting")}
                onMouseMove={()=>setshowConsultingMenu(true)}
                onMouseOut={()=>setshowConsultingMenu(false)}>
                <div className={cx("customer-consulting-container")}>
                    <div className={cx("logo-customer")}>
                        <AiFillQuestionCircle/>
                    </div>
                    <div className={cx("title")}>Hỗ trợ</div>
                    
                </div>
                {showConsultingMenu?<div className={cx("consulting-menu")}>
                    <div><BiSearch/> Tra cứu đơn hàng</div>
                    <div><AiOutlineHome/>  Trung tâm bảo hành</div>
                    <div><BsQuestionCircle/>  Tư vấn mua hàng & sử dụng</div>
                </div>:<></>}
            </div>
            <div className={cx("hotline")} 
                onMouseMove={()=>setshowHotlineMenu(true)}
                onMouseOut={()=>setshowHotlineMenu(false)}>
                <div className={cx("login-container")}>
                    <div className={cx("logo-login")}>
                        <BsFillTelephoneFill/>
                    </div>
                    <div className={cx("title")}>Hotline</div>
                </div>
                {showHotlineMenu?<div className={cx("menu-hotline")}>
                    <div><div className={cx("logo-menu")}><BiPhone/></div><pre>Hotline:        <span style={{
                        color:"red",
                        fontSize:"15px",
                        fontWeight:"bold"
                    }}>097 345 6789</span></pre></div>
                    <div><div className={cx("logo-menu")}><AiOutlineClockCircle/></div><pre>Thời gian:    8h00 - 20h00</pre></div>
                    <div><div className={cx("logo-menu")}><AiOutlineMail/></div><pre>Email:          abc@gmail.com</pre></div>
                </div>:<></>}
            </div>
            <div className={cx("rate")}>
            <div className={cx("rate-container")}>
                    <div className={cx("logo-rate")}>
                        <AiFillStar/>
                    </div>
                    <div className={cx("title")}>Đánh giá</div>
                </div>
            </div>
        </div>
    );
}

export default Header;