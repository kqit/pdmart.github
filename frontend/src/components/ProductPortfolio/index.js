import classNames from "classnames/bind";
import styles from "./ProductPortfolio.module.scss";

import {AiFillHome,AiOutlineMenu } from "react-icons/ai"
import {FaHandHoldingWater } from "react-icons/fa"
import {GiElectricalSocket } from "react-icons/gi"
const cx=classNames.bind(styles)

const fakeList=[
    {
        logoItem:AiFillHome,
        nameItem:"Đồ gia dụng"
    },
    {
        logoItem:FaHandHoldingWater,
        nameItem:"Máy lọc nước"
    },
    {
        logoItem:GiElectricalSocket,
        nameItem:"Bếp điện"
    },
]
function ProductPortfolio() {
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("title")}>
                <AiOutlineMenu className={cx("logo-title")}/>
                <div className={cx("title-title")}>
                    Danh mục sản phẩm
                </div>
            </div>
            {fakeList?
            fakeList.map((item,index)=>{
                const Logo=item.logoItem
                return(
                    <div key={index} className={cx("container-item")}>
                        <div className={cx("logo-item")}>
                            <Logo/>
                        </div>
                        <div className={cx("name-item")}>
                            {item.nameItem}
                        </div>
                    </div>   
            )})
            :<></>}  
        </div>
    );
}

export default ProductPortfolio;