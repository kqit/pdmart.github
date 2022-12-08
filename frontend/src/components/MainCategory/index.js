import CardItem from "../CardItem";
import {AiFillCaretDown} from "react-icons/ai"
import classNames from "classnames/bind";
import styles from "./MainCategory.module.scss"
import { Fragment, useState } from "react";

import { useSelector,useDispatch } from "react-redux";

const cx=classNames.bind(styles)


function MainCategory(props) {
    const [maxItem, setmaxItem] = useState(16);
    const mainData=useSelector(state=>state.categoryProducts).listProducts 
    const priceChoose=props.data
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("filter")}>
            </div>
            <div className={cx("list-item")}>
                {priceChoose.status?
                    mainData.map((item,index)=>{
                        if(item.price>priceChoose.min&item.price<priceChoose.max){
                            return(
                                <div  className={cx("item")} 
                                    key={item.code}><CardItem data={item}/>
                                </div>
                            )
                        }
                        else{
                            return<Fragment></Fragment>
                        }
                    })
                    :mainData.map((item,index)=>{
                        return(
                            <div  className={cx("item")} 
                                key={item.code}><CardItem data={item}/>
                            </div>
                        )   
                    })
                }         
            </div>
            {maxItem<mainData.length?
                <div className={cx("see-more")}>
                <div onClick={()=>setmaxItem(maxItem+8)} className={cx("container")}>
                    <span>Xem thêm sản phẩm <AiFillCaretDown style={{marginBottom: "-2.5px"}}/></span>
                </div>
            </div>:""
            }
        </div>
    );
}

export default MainCategory;