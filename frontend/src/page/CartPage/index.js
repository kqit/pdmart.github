import classNames from "classnames/bind";
import SaleSlips from "../../components/SaleSlips";
import styles from "./CartPage.module.scss";
const cx=classNames.bind(styles)
function CartPage() {
    return (  
        <div className={cx("wrapper")}>
            <SaleSlips/>
        </div>
    );
}

export default CartPage;