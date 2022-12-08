import classNames from "classnames/bind";
import styles from "./FeaturedCategory.module.scss"
import { useState,useEffect } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { getMenu, getProducts, setDefault,getClassCategory } from "../../redux/reducers/categoryProducts";
import { Link } from "react-router-dom";
import { formatURL } from "../../assets";
const cx=classNames.bind(styles)

function FeaturedCategory() {
    const [mainData, setMainData] = useState([]);
    const [category, setCategory] = useState([]);
    const [showItem, setShowItem] = useState(10);
    const dispatch=useDispatch()
    const handleProductsPage=(data)=>{
        const action=data
        dispatch(getProducts(action))
    }
    const handleGetMenu=(data)=>{
        const action=data
        
        dispatch(getMenu(action))
    }
    const handleGetClass=(data)=>{
        const action=data
        dispatch(getClassCategory(action))
    }
    useEffect(() => {
        axios.get(`http://localhost:5000/home/class-category?count=${showItem}`)
        .then(res=>setMainData(res.data))
    }, [showItem]);
    const getCategory=(id_class)=>{
        window.scrollTo(0,0)
        axios.get(`http://localhost:5000/home/category?id=${id_class}`)
        .then(res=>{
            dispatch(setDefault(1))
            handleGetMenu(res.data)
            return res.data
        })
        .then(res=>{
            res.map((item)=>{
                axios.get(`http://localhost:5000/home/products?id=${item.id_cate}`)
                .then(res=>handleProductsPage(res.data))
            })
        })
        
    }
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <div className={cx("title")}>
                    Danh mục nổi bật
                </div>
            </div>
            <div className={cx("list-item")}>
                {
                    mainData?
                    mainData.map(item=>{
                        return(
                            <Link key={item.id_class} to={`/${formatURL(item.name)}-${formatURL(item.id_class)}`} onClick={()=>{
                                getCategory(item.id_class)
                                handleGetClass(item)
                                
                                }} className={cx("container-item")}>
                                <div className={cx("main-container")}>
                                        <img className={cx("img-item")} src={`http://localhost:5000/${item.img}.jpg`}/>
                                    <div className={cx("name-item")}>
                                        {item.name}
                                    </div>
                                    {item.sale?<div className={cx("sale-price")}>
                                        {item.sale}
                                    </div>:""}
                                </div>
                            </Link>
                        )
                    }):<></>
                }
            </div>
            <div className={cx("see-more")}>
                {showItem<20?
                <div onClick={()=>{setShowItem(showItem+10)}} className={cx("container-see-more")}>
                    Xem thêm
                </div>:""
                }
            </div>
        </div>
    );
}

export default FeaturedCategory;