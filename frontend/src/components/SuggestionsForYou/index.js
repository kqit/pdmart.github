import classNames from "classnames/bind";
import styles from "./SuggestionsForYou.module.scss"
import CardItem from "../CardItem/index"
import { useDispatch, useSelector } from "react-redux";
import {getAPIForYou} from "../../redux/reducers/home";
import { useState, useEffect } from "react";
import axios from "axios"
const cx=classNames.bind(styles)
const loops=[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

const startRandom=(Math.random()*40).toFixed(0)
function SuggestionsFouYou() {
    const [loop, setLoop] = useState(loops);
    const dataForYou=useSelector(state=>state.home.forYou)||[]
    const dispatch=useDispatch()
    useEffect(() => {
        axios.get(`http://localhost:5000/home/foryou?count=${loop.length}&start=${startRandom}`)
        .then(res=>{
            const action=res.data
            dispatch(getAPIForYou(action))
        })
    }, [loop.length]);
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("header-container")}>
                <div className={cx("icon")}>

                </div>
                <div className={cx("title")}>
                    Gợi ý cho bạn
                </div>
            </div>
            <div className={cx("main-container")}>
                {dataForYou.map((item,index)=>{
                    return <div key={index} className={cx("item")}>
                        <CardItem data={item}/>
                    </div>})}
            </div>
            {loop.length<45?
                <div className={cx("see-more")}>
                <div className={cx("main")} onClick={()=>{
                    setLoop([...loop,...loops])
                }}>
                    Xem thêm
                </div>
            </div>:<></>
            }
        </div>
    );
}

export default SuggestionsFouYou;