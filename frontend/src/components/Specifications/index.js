import classNames from "classnames/bind";
import CommentAndRate from "../CommentAndRate";
import styles from "./Specifications.module.scss";
const cx=classNames.bind(styles)
const fake=[
    {
        specifi:"Công suất",
        value:"50W"
    },
    {
        specifi:"Động cơ",
        value:"Bạc thau"
    },
    {
        specifi:"Sải cánh",
        value:"40cm"
    }
]
function Specifications() {
    return (  
        <div className={cx("wrapper")}>
            
                <div className={cx("specifications")}>
                    <div style={{
                        fontWeight:"bold",
                        padding:"5px"                        
                    }}>Thông số kĩ thuật</div>
                    {fake?
                    fake.map((item,index)=>{
                        return(
                            <div key={index} style={index%2!==0?{backgroundColor:"rgb(246, 246, 246)"}:{}} className={cx("item-spec")}>
                                <div className={cx("left-spec")}>{item.specifi}</div>
                                <div className={cx("right-spec")}>{item.value}</div>
                            </div>
                        )
                    }):""           
                    }
                </div>
                <div className={cx("product-describe")}>
                    <div style={{
                        fontWeight:"bold",
                        padding:"5px"                        
                    }}>Mô tả sản phẩm</div>
                    <div className={cx("content")}>
                        Hiện chưa có mô tả cho sản phẩm này
                    </div>
                </div>
                <div className={cx("comment-rate")}>
                    <CommentAndRate/>
                </div>
        </div>
    );
}

export default Specifications;