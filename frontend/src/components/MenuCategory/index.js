import classNames from "classnames/bind";
import styles from "./MenuCategory.module.scss"
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios"
import { getProductsOneCategory } from "../../redux/reducers/categoryProducts"
import { formatNumberPrice } from "../../assets";
const cx=classNames.bind(styles)
const fake=[
    {
        minPrice:100000,
        maxPrice:300000,
    },
    {
        minPrice:300000,
        maxPrice:500000,
    },
    {
        minPrice:500000,
        maxPrice:700000,
    },
    {
        minPrice:700000,
        maxPrice:1000000,
    },
    {
        minPrice:1000000,
        maxPrice:1500000,
    },
    {
        minPrice:1500000,
        maxPrice:2000000,
    },
]
function MenuCategory(props) {
    const mainData=useSelector(state=>state.categoryProducts).menu
    const dispatch=useDispatch()
    const [choose, setChoose] = useState(0);
    const [checkbox, setCheckbox] = useState(-1);
    const filterCategory=(id_cate)=>{
        axios.get(`http://localhost:5000/home/products?id=${id_cate}`)
        .then(res=>{
            const action=res.data
            dispatch(getProductsOneCategory(action))
        })
    }
    
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("title")}>
                Các loại nồi
            </div>
            <div className={cx("list-item")}>
                { mainData.map(item=>{
                    
                    return(
                        <div key={item.id_cate} 
                        onClick={(e)=>{
                            filterCategory(item.id_cate)
                            setChoose(item.id_cate)
                        }}
                        style={choose==item.id_cate?{color:"rgb(253, 108, 29)"}:{color:"black"}}
                        className={cx("item")}>
                            <div className={cx("img-item")}>
                                <img src={`http://localhost:5000/${item.img}.jpg`}/>
                            </div>
                            <div className={cx("name-item")}>
                                {item.name_cate}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={cx("select")}>
                Giá cả
                <div className={cx("list-select-price")}>
                    {fake.map((item,index)=>
                        <div className={cx("item-select-price")} key={index}>
                            <input type="checkbox" checked={index==checkbox} onClick={()=>{
                                
                                
                                if(props.state.status&index==checkbox){
                                    props.state.method({
                                        status:false,
                                        min:0,
                                        max:0
                                    })
                                    setCheckbox(-1)
                                }else{
                                    props.state.method({
                                        status:true,
                                        min:item.minPrice,
                                        max:item.maxPrice
                                    })
                                    setCheckbox(index)
                                }
                            
                            }}/>
                            <div className={cx("min")}>{formatNumberPrice(item.minPrice)}</div>-
                            <div className={cx("max")}>{formatNumberPrice(item.maxPrice)}</div> 
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default MenuCategory;