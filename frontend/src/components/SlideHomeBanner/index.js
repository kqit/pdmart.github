import classNames from "classnames/bind";
import styles from "./SlideHomeBanner.module.scss"
import { useState, useEffect } from "react";
import {GrNext, GrPrevious } from "react-icons/gr"
const cx=classNames.bind(styles)
const fakeSlide=[
    {
        id:1,
        img:"https://f7-zpcloud.zdn.vn/3498124665114888792/dd618bcf9731526f0b20.jpg"
    },
    {
        id:2,
        img:"https://www.baocamau.com.vn/uploads/image/2022/05/26/V-1.jpg"
    },
    {
        id:3,
        img:"https://icdn.dantri.com.vn/2019/1/16/anh-cuoi5-15476138539851168605331.jpg"
    },
]

function SlideHomeBanner() {
    const [widthSlides, setWidthSlides] = useState(fakeSlide.length*960);
    const [nowSlide, setNowSlide] = useState(1);
    useEffect(() => {
        const autoChangeSlide=setInterval(()=>changeNowSlide(1),5000)
        return ()=>clearInterval(autoChangeSlide)
    }, [nowSlide]);

    const changeNowSlide=(number)=>{
        if (number===1&&nowSlide===fakeSlide.length) {
            setNowSlide(1)
            return
        }
        else if(number===-1&&nowSlide===1){
            setNowSlide(fakeSlide.length)
            return
        }
            setNowSlide(nowSlide+number)
        
    }
    
    const leftWidth=()=>{
        return (nowSlide-1)*960
    }
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container-slide")}>
                <div style={{
                    width:`${widthSlides}px`,
                    marginLeft:`-${leftWidth()}px`
                    }} 
                    className={cx("slides")}>
                    {
                        fakeSlide?
                        fakeSlide.map(item=>{
                            return(
                                <img className={cx("img-slide")} key={item.id} src={item.img} />
                            )
                        }):<></>
                    }
                </div>
            </div>
                <button 
                    onClick={()=>{
                        changeNowSlide(-1)
                    }}  
                    className={cx("pre-slide")}><GrPrevious/></button>
                    <button 
                    onClick={()=>{
                        changeNowSlide(1)
                    }} 
                    className={cx("next-slide")}>
                <GrNext/></button>
            <div className={cx("select-slide")}>
                {
                fakeSlide.map((item)=>{
                    return <div 
                        key={item.id}
                        style={item.id==nowSlide?{
                            background:'black'
                        }:{}}
                        onClick={()=>{
                            setNowSlide(item.id)
                        }}
                        className={cx("button-select")}></div>
                })
                }
            </div>
        </div>
    );
}

export default SlideHomeBanner;