import classNames from "classnames/bind";
import styles from "./Banner.module.scss"
const cx=classNames.bind(styles)
function Banner() {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("img-banner")} src={cx("https://cdn.tgdd.vn/2022/08/banner/1200-44-1200x44-6.png")}></img>
        </div>
    );
}

export default Banner;