import classNames from "classnames/bind";
import Catalog from "../../components/Catalog"; 
import FeaturedCategory from "../../components/FeaturedCategory";
import FlashSale from "../../components/FlashSale";
import ProductPortfolio from "../../components/ProductPortfolio";
import SlideHomeBanner from "../../components/SlideHomeBanner";
import SuggestionsFouYou from "../../components/SuggestionsForYou";
import styles from "./Home.module.scss";


import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/reducers/cart";

const init={
    name:"Đồ gia dụng",
    banner:"https://s.meta.com.vn/img/thumb.ashx/Data/image/2019/08/27/may-ep-trai-cay.png",
    item_product:[
        {
            img:"https://meta.vn/icons/cateico/c448-0x0.jpg",
            name:"Quạt,làm mát"
        }
    ],
    hightlightProduct:{
        title:"Đồ gia dụng nổi bật",
        item:[
            {
                img:"https://s.meta.com.vn/img/thumb.ashx/300x300x95/Data/image/2022/05/10/quat-dung-senko-co-dieu-khien-tu-xa-dr1608-a.jpg",
                goodWill:"Giảm sốc",
                name:"Quạt a đứng Ssenko có điều khiển từ xa DR1608 (65W, 7 cánh)",
                otherInformation:"",
                price:120000000,
                sale:"60%",
                gift:"",
                rate:{
                    point:"4,5",
                    quantity:36
                }
            },
        ]
    }
}
const dienlanh={
    name:"Đồ gia dụng",
    banner:"https://s.meta.com.vn/img/thumb.ashx/Data/image/2022/08/15/Banner-binh-nong-lanh-290x350.png",
    item_product:[
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
        {
            img:"https://meta.vn/icons/cateico/c3256-0x0.jpg",
            name:"Ti vi"
        },
    ],
    hightlightProduct:{
        title:"Điện lạnh nổi bật",
        item:[
            {
                img:"https://s.meta.com.vn/img/thumb.ashx/300x300x95/Data/image/2022/05/10/quat-dung-senko-co-dieu-khien-tu-xa-dr1608-a.jpg",
                goodWill:"Giảm sốc",
                name:"Quạt a đứng Ssenko có điều khiển từ xa DR1608 (65W, 7 cánh)",
                otherInformation:"",
                price:120000000,
                sale:"60%",
                gift:"",
                rate:{
                    point:"4,5",
                    quantity:36
                }
            },
        ]
    }
}
const cx=classNames.bind(styles)
function Home() {
    const [showDataCatalog, setShowDataCatalog] = useState(init);
    
    
    const hanldCatalog=(data,e)=>{
        setShowDataCatalog(data)
        const dom=e.target.parentElement.children
        for(let i=0;i<dom.length;i++){
            dom[i].style.borderBottom="0"
        }
        e.target.style.borderBottom="5px rgb(253, 108, 29) solid"
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("main-container")}>
                <div className={cx("product-portfolio")}>
                    <ProductPortfolio/>
                </div>
                <div className={cx("home-banner")}>
                    <div className={cx("slide-run")}>
                        <SlideHomeBanner/>
                    </div>
                    <div className={cx("good-price-1")}>
                        <img src="https://meta.vn/Data/2022/Thang06/Banner-dien-thoai-ban-panasonic-330x99.png"/>
                    </div>
                    <div className={cx("good-price-2")}>
                        <img src="https://meta.vn/Data/2022/Thang04/Banner-may-han-dien-tu-330x99.png"/>
                    </div>
                    <div className={cx("good-price-3")}>
                        <img src="https://meta.vn/Data/2022/Thang06/Banner-loa-bluetooth-330x99.png"/>
                    </div>
                </div>   
            </div>
            <div className={cx("featured-category")}>
                <FeaturedCategory/>
            </div>
            <div className={cx("flash-sale")}>
                <FlashSale/>
            </div>
            <div className={cx("suggestions-for-you")}>
                <SuggestionsFouYou/> 
            </div>
            <div className={cx("box-catalog")}>
                <div  className={cx("header-box-catalog")}>
                    <div style={{borderBottom:"5px rgb(253, 108, 29) solid"}} className={cx("title-catalog-1")} 
                        onClick={(e)=>{hanldCatalog(init,e)  
                    }}>Đồ gia dụng</div>
                    <div className={cx("title-catalog-2")} 
                        onClick={(e)=>{hanldCatalog(dienlanh,e)
                    }}>Máy điện máy lạnh</div>
                    <div className={cx("title-catalog-2")} 
                        onClick={(e)=>{hanldCatalog(init,e)
                    }}>CÔNG CỤ & DỤNG CỤ</div>
                    <div className={cx("title-catalog-2")} 
                        onClick={(e)=>{hanldCatalog(dienlanh,e)
                    }}>Y TẾ & SỨC KHOẺ</div>
                </div>
                <Catalog data={showDataCatalog}/>
            </div>

        </div>
    );
}

export default Home;