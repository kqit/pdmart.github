import classNames from "classnames/bind";
import CardItem from "../CardItem";
import styles from "./Catalog.module.scss";
import {GrNext, GrPrevious } from "react-icons/gr"
import { useState } from "react";
const cx=classNames.bind(styles)
const loopItem=[1,1,1,1,1]
const fake={
    banner:"https://s.meta.com.vn/img/thumb.ashx/Data/image/2019/08/27/may-ep-trai-cay.png",
    item_product:[
        {
            img:"https://meta.vn/icons/cateico/c448-0x0.jpg",
            name:"Quạt"
        }
    ],
    hightlightProduct:[
        {
            img:"https://s.meta.com.vn/img/thumb.ashx/300x300x95/Data/image/2022/05/10/quat-dung-senko-co-dieu-khien-tu-xa-dr1608-a.jpg",
            name:"abc",
        }
    ]
}
function Catalog(props) {
    const show=props.data

    const [maxWidthSlideHightlight, setMaxWidthSlideHightlight] = useState(1200);
    const [marginLeftSlideHightlight, setMarginLeftSlideHightlight] = useState(0);
    const [gridCoulumHightlight, setgridCoulumHightlight] = useState("1fr 1fr 1fr 1fr 1fr ");
    const [loopHightlight, setloopHightlight] = useState([1,1,1,1,1]);

    const handleSlideHightlight=(number)=>{
        setMarginLeftSlideHightlight(marginLeftSlideHightlight+240*number)
        
        if(number>0){
            setMaxWidthSlideHightlight(maxWidthSlideHightlight+240*number)
            setgridCoulumHightlight(gridCoulumHightlight+"1fr 1fr 1fr 1fr 1fr ")
            setloopHightlight([...loopHightlight,1,1,1,1,1])
        }
    }
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("box-cat-body")}>
                <div className={cx("banner")}>
                    <img src={show.banner}/>
                </div>
                <div className={cx("list-item")}>
                    <div className={cx("items")}>
                        {
                            show.item_product?
                            show.item_product.map(item=>{
                                return(
                                    <div key={item.code} className={cx("container-item")}>
                                        <img src={item.img}/>
                                        <div className={cx("name-item")}>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            }):<></>
                        }
                    </div>
                    
                </div>
            </div>
            <div className={cx("product-hightlight")}>
                <div className={cx("header-box")}>
                    <div className={cx("title-box")}>
                        {show.hightlightProduct.title}
                    </div>
                    
                    <div className={cx("see-all")}>
                        Xem tất cả sản phẩm
                    </div>
                </div>
                <div className={cx("main-box")}>
                    <div className={cx("items-product")}
                        style={{
                            gridTemplateColumns:gridCoulumHightlight,
                            width:maxWidthSlideHightlight,
                            marginLeft:-marginLeftSlideHightlight+"px",
                        }}>
                        {loopHightlight.map((item,index)=>{
                            return(
                                <div key={index} className={cx("item-product")}>
                                    <CardItem data={show.hightlightProduct.item[0]}/>
                                </div>
                            )
                        })}
                    </div>
                    {marginLeftSlideHightlight>0?
                        <button className={cx("pre-list")} onClick={()=>handleSlideHightlight(-5)}><GrPrevious/></button>:<></>
                    }
                    {marginLeftSlideHightlight<25*240?
                        <button className={cx("next-list")} onClick={()=>handleSlideHightlight(5)}><GrNext/></button>
                        :<></>
                    }
                </div>
            </div>
        </div>
    );

}

export default Catalog;