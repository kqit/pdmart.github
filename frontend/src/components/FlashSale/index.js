import classNames from "classnames/bind";
import styles from "./FlashSale.module.scss"
import { useState, useEffect } from "react";
import {GrNext, GrPrevious } from "react-icons/gr"
import axios from "axios";
import CardItem from "../CardItem";
const cx=classNames.bind(styles)

const fake=[
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
const loop=[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
const max_item=20;
let columGrid=""
loop.forEach(()=>columGrid=columGrid+"1fr ")
function FlashSale() {
    const [hourRemaining, setHourRemaining] = useState(1);
    const [minuteRemaining, setMinuteRemaining] = useState(0);
    const [secondRemaining, setSecondRemaining] = useState(5);
    const [listItemDeal, setListItemDeal] = useState([]);
    const [left, setLeft] = useState(0);
    useEffect(() => {
        axios.get("http://localhost:5000/home/deal")
        .then(res=>setListItemDeal(res.data))
    }, []);
    useEffect(() => {
        const changeTime=setInterval(()=>{handleTimeRemaining()},975)
        return () => {
            clearInterval(changeTime)
        };
    }, [secondRemaining]);
    //xu li thoi gian
    const handleTimeRemaining=()=>{
        if (secondRemaining===0&&minuteRemaining===0&&hourRemaining===0) {
            return
        }else if(secondRemaining===0&&minuteRemaining===0&&hourRemaining!==0){
            setHourRemaining(hourRemaining-1)
            setSecondRemaining(59)
            setMinuteRemaining(59)
        } else if(secondRemaining===0){
            setMinuteRemaining(minuteRemaining-1)
            setSecondRemaining(59)
        } else{
            setSecondRemaining(secondRemaining-1)
        }
    }
    //xu li so
    const formatNumber=(number)=>{
        if(number<10){
            return `0${number}`
        }
        else return `${number}`
    }
    //xu li keo sang
    const handleSlide=(number)=>{
        setLeft(left+238*number)
    }
    
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("header-container")}>
                    <div className={cx("title-container")}>
                        FLASH SALE
                    </div>
                    <div className={cx("time-remaining")}>
                        <div className={cx("hours-time")}>
                            {formatNumber(hourRemaining)}
                        </div>
                        <div className={cx("minutes-time")}>
                            {formatNumber(minuteRemaining)}
                        </div>
                        <div className={cx("seconds-time")}>
                            {formatNumber(secondRemaining)}
                        </div>
                    </div>
                </div>
                <div className={cx("main-container")}>
                    <div style={{
                        width:237*loop.length+"px",
                        gridTemplateColumns:columGrid,
                        marginLeft:-left+"px"
                        }} className={cx("items")}>
                        {listItemDeal.map(item=>
                            <div key={item.code} className={cx("item")}>
                                <CardItem data={item}/>
                            </div>)}
                    </div>
                    {left!==0?
                        <button className={cx("pre-list")} onClick={()=>handleSlide(-5)}><GrPrevious/></button>
                    :<></>}
                    {left===238*(max_item-5)?<></>:
                        <button className={cx("next-list")} onClick={()=>handleSlide(5)}><GrNext/></button>
                    }
                    </div>
                <div className={cx("footer")}>
                    <div className={cx("see-all")}>
                        Xem tất cả sản phẩm
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashSale;