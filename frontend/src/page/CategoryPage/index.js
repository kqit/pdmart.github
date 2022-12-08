import MainCategory from "../../components/MainCategory";
import MenuCategory from "../../components/MenuCategory";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./CategoryPage.module.scss"
const cx=classNames.bind(styles)
function CategoryPage() {
    const [priceChoose, setPriceChoose] = useState({
        status:false,
        min:0,
        max:0
    });
    console.log(priceChoose)
    return (  
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("menu")}>
                    <MenuCategory state={{
                        value:priceChoose,
                        method:setPriceChoose
                    }}/>
                </div>
                <div className={cx("main-container")}>
                    <MainCategory data={priceChoose}/>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;