import Banner from "../../components/Banner";
import Header from "../../components/Header";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Footer from "../../components/Footer";
const cx=classNames.bind(styles)
function DefaultLayout({children}) {
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("layout-banner")}>
                <Banner/>
            </div>
            <div className={cx("layout-header")}>
                <Header/>
            </div>
            <div className={cx("layout-child")}>
                {children}
            </div>
            <div className={cx("layout-footer")}>
                <Footer/>
            </div>
        </div>
    );
}

export default DefaultLayout;