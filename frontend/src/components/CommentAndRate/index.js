import classNames from "classnames/bind";
import styles from "./CommentAndRate.module.scss";
const cx=classNames.bind(styles)
function CommentAndRate() {
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("all-comment")}>
                <div className={cx("rate")}>
                    <div className={cx("star-rate")}>
                        xxx
                    </div>
                    <div className={cx("rate-point")}>
                        4/5
                    </div>
                    <div className={cx("rate-quantity")}>
                        60 đánh giá
                    </div>
                </div>
                <div className={cx("rate-comment")}>
                    1 sao<input value={100} type="range" disabled/><br/>
                    2 sao<input type="range" disabled/><br/>
                    3 sao<input type="range" disabled/><br/>
                    4 sao<input type="range" disabled/><br/>
                    5 sao<input type="range" disabled/><br/>
                </div>
            </div>
            <div className={cx("comment-of-you")}>
                <div></div>
            </div>
            <div className={cx("comment")}>

            </div>
        </div>
    );
}

export default CommentAndRate;