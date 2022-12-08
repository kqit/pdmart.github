import {Link } from "react-router-dom"
import classNames from "classnames/bind";
import { FaStar } from "react-icons/fa";
import { formatNumberPrice } from "../../assets";
import styles from "./BrandPage.module.scss";
import { useDispatch } from "react-redux";
import { changeInformationPage } from "../../redux/reducers/InformationProductPage";
const cx=classNames.bind(styles)
const fake=[
    {
        img:"https://s.meta.com.vn/img/thumb.ashx/100x100x95/Data/image/2020/12/03/may-giat-long-ngang-samsung-inverter-8kg-ww80t3020ww-sv-500.jpg",
        name:"Máy giặt lồng ngang Samsung inverter 8kg WW80T3020WW/SV",
        price:4500000,
        sale:0,
        ratePoint:4.6,
        rateQuantity:20
    },
    {
        img:"https://s.meta.com.vn/img/thumb.ashx/100x100x95/Data/image/2021/05/20/tiross-ts9182-a.jpg",
        name:"Quạt tháp có điều khiển Tiross TS9182 (12 tốc độ gió)",
        price:1500000,
        sale:43,
        ratePoint:4.6,
        rateQuantity:20
    },
    {
        img:"https://s.meta.com.vn/img/thumb.ashx/100x100x95/Data/image/2019/05/15/quat-dung-toshiba-f-lsa20-h-vn-1.jpg",
        name:"Quạt cây lồng ngang Samsung lightverter 8kg WSA2021WER3",
        price:12500000,
        sale:16,
        ratePoint:4.6,
        rateQuantity:20
    },
    {
        img:"https://s.meta.com.vn/img/thumb.ashx/100x100x95/Data/image/2020/12/03/may-giat-long-ngang-samsung-inverter-8kg-ww80t3020ww-sv-500.jpg",
        name:"Máy giặt lồng ngang Samsung inverter 8kg WW80T3020WW/SV",
        price:11500000,
        sale:99,
        ratePoint:4.6,
        rateQuantity:20
    },
]
const fa={
    code:"0002", 
    listImgProduct:[
        "https://s.meta.com.vn/img/thumb.ashx/100x100x95/Data/image/2021/05/20/tiross-ts9182-a.jpg",
        "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms-1.jpg",
        "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms-2.jpg",
        "https://s.meta.com.vn/Data/image/2022/05/27/quat-cay-vinawind-400x-ms-3.jpg"
    ],
    nameProduct:"Quạt tháp có điều khiển Tiross TS9182 (12 tốc độ gió)",
    rate:{
        point:4.7,
        quantity:144
    },
    amountSell:566,
    sale:19,
    priceOneProduct:11500000,
    status:true,
    specifictions:[],
    describe:"",
}
function BrandPage() {
    const dispatch=useDispatch()
    const handleChangePage=()=>{
        const action=fa
        dispatch(changeInformationPage(action))
    }
    return (  
        <Link to={`/${fa.code}`} onClick={()=>{handleChangePage()}} className={cx("wrapper")}>
            <div style={{
                fontWeight:"bold",
                padding:"5px"
            }}>Một số sản phẩm khác</div>
            <div className={cx("list-item")}>
                {fake.map(item=>{
                    return(
                        <div key={item.code} className={cx("item")}>
                        
                            <div className={cx("left-item")}>
                            <img src={item.img}/>
                            </div>
                            <div className={cx("right-item")}>
                                <div className={cx("name-product")}>
                                    {item.name}
                                </div>
                                <div className={cx("price-product")}>
                                    <div className={cx("sell-price")}>{formatNumberPrice(item.price*(100-item.sale)/100)}</div>
                                    {item.sale!==0?
                                        <div className={cx("cost")}>{formatNumberPrice(item.price)}</div>:""
                                    }
                                    <div className={cx("sale")}>

                                    {
                                        item.sale!==0?
                                        `-${item.sale}%`:""
                                    }
                                    </div>
                                </div>
                                <div className={cx("rate-product")}>
                                    {item.ratePoint}<FaStar/> 
                                    <span style={{color:"gray",paddingLeft:"5px"}}>({item.rateQuantity})</span>
                                </div>
                            </div>
                        </div>
                        )
                })
                }
            </div>
        </Link>
    );
}

export default BrandPage;