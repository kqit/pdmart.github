import classNames from "classnames/bind";
import styles from "./SaleSlips.module.scss";
import {Link} from "react-router-dom"
import {MdOutlineRemoveShoppingCart } from "react-icons/md"
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
//from components
import ItemBuy from "../ItemBuy";
//from assets
import { removeVietnameseTones, formatNumberPrice} from "../../assets";

//from redux
import { useSelector } from "react-redux";
import { addProduct } from "../../redux/reducers/cart";

const cx=classNames.bind(styles)

const payment=[
    "Giao hàng và thu tiền tại nhà(COD)",
    "Chuyển khoản ngân hàng",
    "Thanh toán bằng ví điện tử",
    "Thanh toán và nhận hàng tại cửa hàng"
]
const bankInformation=[
    {
        name:"Vietcombank",
        numberBank:1016921766
    },
    {
        name:"Vietinbank",
        numberBank:101872955197
    }
]
const shopAddress=[
    "Cổng công nghiệp Lai Vu, xã Lai Vu, huyện Kim Thành, tỉnh Hải Dương"
]
function SaleSlips() {
    const [province, setProvince] = useState([]);
    const [chooseProvince, setChooseProvince] = useState({
        status:false
    });
    const [showListProvince, setshowListProvince] = useState(false);
    const [searchProvince, setSearchProvince] = useState("");

    const [districts, setDistricts] = useState();
    const [chooseDistricts, setChooseDistricts] = useState({
        status:false
    });
    const [showListDistricts, setshowListDistricts] = useState(false);
    const [searchDistricts, setSearchDistricts] = useState("");

    const [wards, setWards] = useState();
    const [chooseWards, setChooseWards] = useState({
        status:false
    });
    const [showListWards, setshowListWards] = useState(false);
    const [searchWards, setSearchWards] = useState("");
    const [choosePayment, setChoosePayment] = useState(0);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [place, setPlace] = useState("");
    const [paymentInformation, setPaymentInformation] = useState({
        name:"",
        phone:"",
        province:"",
        districts:"",
        wards:"",
        place:"",
        payment:"",
        status:false,
        orderClick:false
    });
    const listProduct=useSelector(state=>state.cart.listProduct)
    const price=useSelector(state=>state.cart.totalPrice)
    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/p/")
        .then(res=>setProvince(res.data))
        .catch(err=>{return}) 
    }, []);
    useEffect(() => {
        let codeProvince=chooseProvince.code
        axios.get(`https://provinces.open-api.vn/api/p/${codeProvince}?depth=2`)
        .then(res=>setDistricts(res.data.districts))
        .catch(err=>{return}) 
    }, [chooseProvince.code]);
    useEffect(() => {
        let codeDistricts=chooseDistricts.code
        axios.get(`https://provinces.open-api.vn/api/d/${codeDistricts}?depth=2`)
        .then(res=>setWards(res.data.wards))
        .catch(err=>{
            return
        }) 
    }, [chooseDistricts.code]);
    
    const resultSeach=(list,string)=>{
        let fakeList=[]
        list.forEach((item)=>{
            const Str=removeVietnameseTones(item.name)
            string=removeVietnameseTones(string)
            if(Str.includes(string)){
                fakeList=[...fakeList,item]
            }
        })
        return fakeList
    }
    const priceProducts=()=>{
        let sum=0
        listProduct.forEach((item)=>{
            sum=sum+item.price*item.amount
        })
        return formatNumberPrice(sum)
    }
    const totalProduct=()=>{
        let sum=0
        listProduct.forEach((item)=>{
            sum=sum+item.amount
        })
        return sum
    }
    const total=()=>{
        let sum=0
        listProduct.forEach((item)=>{
            sum=sum+item.price*item.amount
        })
        return formatNumberPrice(sum+price.ship-price.sale)
    }
    return ( 
        <>
        {listProduct.length!==0?
        <div className={cx("wrapper")}>
        
            <div className={cx("header-container")}>
                <Link to="/">
                    Mua thêm sản phẩm khác
                </Link>
                <div>
                    Giỏ hàng của bạn
                </div>
            </div>
            <div className={cx("main-container")}>
                <div className={cx("list-product")}>
                    {listProduct?
                        listProduct.map((item)=>{
                            return(
                                <ItemBuy key={item.code} data={item} />
                            )
                            
                        }):<></>  
                    }
                </div>
                <div className={cx("total-price")}>
                    <div> 
                            Tiền hàng ({totalProduct()} sản phẩm):
                        <div>
                            {
                                priceProducts()
                            }
                        </div>
                    </div>
                    <div>
                        Phí vận chuyển: 
                            {price?
                                price.ship==0?
                                <div>Miễn phí</div>:
                                <div>{formatNumberPrice(price.ship)}</div>
                                :""
                            }
                    </div>
                    
                        {price?
                                price.sale!==0?
                                <div>
                                    Giảm giá:
                                <div>{formatNumberPrice(price.sale)}</div>
                                </div>
                                :<Fragment></Fragment>
                            :""
                        }
                    <div style={{
                        fontWeight:"bolder"
                    }}>
                        Tổng tiền:
                        <div>
                            {total()}
                        </div>
                    </div>
                    
                </div>
                <div className={cx("payment-information")}>
                    <div className={cx("personal-information")}>
                        <div
                            className={cx("name")}>
                            <div>Họ và Tên</div>
                            <input
                                style={paymentInformation.orderClick&&!name?
                                    {border:"0.35px red solid"}:{}
                                }
                                onChange={(e)=>setName(e.target.value)} 
                                type="text" placeholder="Họ và tên"/>
                        </div>
                        <div className={cx("phone")}>
                            <div>Số điện thoại</div>
                            <input 
                                style={paymentInformation.orderClick&&!phone?
                                    {border:"0.35px red solid"}:{}
                                }
                                onChange={(e)=>setPhone(e.target.value)} 
                                type="text" placeholder="Số điện thoại"/>
                        </div>
                    </div>
                    <div className={cx("place")}>
                        <div className={cx("title-place")}> Địa chỉ</div>
                        <div className={cx("container-place")}>    
                            <div onClick={()=>{
                                setshowListProvince(true)
                                setshowListDistricts(false)
                                setshowListWards(false)
                                }} 
                                style={paymentInformation.orderClick&&!chooseProvince.name?
                                    {border:"0.35px red solid"}:{}
                                }
                                className={cx("value-province")}>
                                {chooseProvince.status?chooseProvince.name:"Tỉnh/Thành phố"}
                            </div>
                            {//Kiem tra xem có đang ở trạng thái tìm kiếm không
                            !searchProvince?
                            //Xem toàn bộ danh sách
                                showListProvince?
                                    <div className={cx("list-province")}>
                                        <input
                                        placeholder="Tìm..."
                                        onChange={(e)=>{
                                            setSearchProvince(e.target.value)
                                        }}
                                        className={cx("search-province")}/>
                                        {province?
                                            province.map(item=><div
                                                onClick={()=>{
                                                    setChooseProvince({...item,status:true})
                                                    setshowListProvince(false)
                                                    setChooseDistricts({status:false})
                                                    setChooseWards({status:false})
                                                }}
                                                className={cx("item-province")}
                                                key={item.id}>{item.name}</div>):<Fragment></Fragment>
                                        }
                                    </div>:<Fragment></Fragment>:
                            //Xem những tỉnh tìm kiếm được
                                showListProvince?
                                    <div className={cx("list-province")}>
                                    <input
                                    placeholder="Tìm..."
                                    onChange={(e)=>{
                                        setSearchProvince(e.target.value)
                                    }}
                                    className={cx("search-province")}/>
                                    {resultSeach(province,searchProvince)?
                                        resultSeach(province,searchProvince).map(item=><div
                                            onClick={()=>{
                                                setChooseProvince({...item,status:true})
                                                setshowListProvince(false)
                                                setChooseDistricts({status:false})
                                                setChooseWards({status:false})
                                                setSearchProvince("")
                                            }}
                                            className={cx("item-province")}
                                            key={item.id}>{item.name}</div>):<Fragment></Fragment>
                                    }
                                    </div>:<Fragment></Fragment>
                            }
                            
                            <div onClick={()=>{
                                setshowListDistricts(true)
                                setshowListProvince(false)
                                setshowListWards(false)
                                }}
                                style={paymentInformation.orderClick&&!chooseDistricts.name?
                                    {border:"0.35px red solid"}:{}
                                }
                                className={cx("value-province")}>
                                {chooseDistricts.status?chooseDistricts.name:"Quận/Huyện/Thị xã"}
                            </div>
                            {//Kiem tra xem có đang ở trạng thái tìm kiếm không
                            !searchDistricts?
                            //Xem toàn bộ danh sách  
                                showListDistricts?
                                    <div className={cx("list-districts")}>
                                        <input 
                                        placeholder="Tìm..."
                                        onChange={(e)=>{
                                            setSearchDistricts(e.target.value)
                                        }}
                                        className={cx("search-province")}/>
                                        {districts?
                                            districts.map(item=><div 
                                                onClick={()=>{
                                                    setChooseDistricts({...item,status:true})
                                                    setshowListDistricts(false)
                                                    setChooseWards({status:false})
                                                }}
                                                className={cx("item-province")} 
                                                key={item.id}>{item.name}</div>):<Fragment></Fragment>
                                        }
                                    </div>:<Fragment></Fragment>:
                            //Xem những huyện tìm kiếm được
                                showListDistricts?
                                    <div className={cx("list-districts")}>
                                    <input 
                                    onChange={(e)=>{
                                        setSearchDistricts(e.target.value)
                                    }}
                                    className={cx("search-province")}/>
                                    {resultSeach(districts,searchDistricts)?
                                        resultSeach(districts,searchDistricts).map(item=><div 
                                            onClick={()=>{
                                                setChooseDistricts({...item,status:true})
                                                setshowListDistricts(false)
                                                setChooseWards({status:false})
                                                setSearchDistricts("")
                                            }}
                                            className={cx("item-province")} 
                                            key={item.id}>{item.name}</div>):<Fragment></Fragment>
                                    }
                                    </div>:<Fragment></Fragment>
                            }
                            <div onClick={()=>{
                                setshowListWards(true)
                                setshowListProvince(false)
                                setshowListDistricts(false)
                                }} 
                                style={paymentInformation.orderClick&&!chooseWards.name?
                                    {border:"0.35px red solid"}:{}
                                }
                                className={cx("value-province")}>
                                {chooseWards.status?chooseWards.name:"Phường/Xã/Thị Trấn"}
                            </div>
                            {//Kiem tra xem có đang ở trạng thái tìm kiếm không
                            !searchWards?
                            //Xem toàn bộ danh sách  
                                showListWards?
                                    <div className={cx("list-wards")}>
                                        <input 
                                        placeholder="Tìm..."
                                        onChange={(e)=>{
                                            setSearchWards(e.target.value)
                                        }}
                                        className={cx("search-province")}/>
                                        {wards?
                                            wards.map(item=><div 
                                                onClick={()=>{
                                                    setChooseWards({...item,status:true})
                                                    setshowListWards(false)
                                                }}
                                                className={cx("item-province")} 
                                                key={item.id}>{item.name}</div>):<Fragment></Fragment>
                                        }
                                    </div>:<Fragment></Fragment>:
                            //Xem những xã tìm kiếm được
                                showListWards?
                                    <div className={cx("list-wards")}>
                                    <input 
                                    onChange={(e)=>{
                                        setSearchWards(e.target.value)
                                    }}
                                    className={cx("search-province")}/>
                                    {resultSeach(wards,searchWards)?
                                        resultSeach(wards,searchWards).map(item=><div 
                                            onClick={()=>{
                                                setChooseWards({...item,status:true})
                                                setshowListWards(false)
                                                setSearchWards("")
                                            }}
                                            className={cx("item-province")} 
                                            key={item.id}>{item.name}</div>):<Fragment></Fragment>
                                    }
                                    </div>:<Fragment></Fragment>
                            }
                            <div className={cx("specific-address")}><input 
                                style={paymentInformation.orderClick&&!place?
                                    {border:"0.35px red solid"}:{}
                                }
                                onChange={(e)=>setPlace(e.target.value)} 
                                type="text" className={cx("specific-address")} 
                                placeholder="Số nhà, tên đường, làng, xóm, thôn, ấp..."/></div>
                        </div>
                        
                    </div>
                    <div className={cx("payments")}>
                        <div className={cx("title-payment")}>
                            Phương thức thanh toán
                        </div>
                        <div className={cx("select-box")}>
                            {payment.map((item,index)=>{
                                return <div key={index}
                                onClick={()=>setChoosePayment(index)}
                                className={cx("item-box")}>
                                    <i style={choosePayment==index?{
                                        backgroundColor:"#2490e3"
                                    }:{}}></i>
                                    {item}
                                {
                                    choosePayment==1&&index==1?
                                    <div className={cx("bank-information")}>
                                        Thông tin ngân hàng:
                                        {bankInformation.map((item=><div>{item.name}:{item.numberBank}</div>))    
                                        }
                                    </div>:<Fragment></Fragment>
                                }
                                {
                                    choosePayment==3&&index==3?
                                    <div className={cx("shop-address")}>
                                        Địa chỉ:
                                        {shopAddress.map((item=><div>{item}</div>))    
                                        }
                                    </div>:<Fragment></Fragment>
                                }
                                </div>
                            })
                            }
                        </div>
                    </div>
                    <div className={cx("other-information")}>
                        <div className={cx("other-request")}>
                            <input type="text" placeholder="Yêu cầu khác (không bắt buộc)"/>
                        </div>
                    </div>
                </div>
                <div className={cx("order")}>
                    <div className={cx("button")}
                        onClick={()=>{
                            setPaymentInformation({
                                name:name,
                                phone:phone,
                                province:chooseProvince.name,
                                districts:chooseDistricts.name,
                                wards:chooseWards.name,
                                place:place,
                                payment:payment[choosePayment],
                                orderClick:true
                            })
                        }}>
                        Đặt hàng
                    </div>
                </div>
            </div>
            {paymentInformation.orderClick&&!paymentInformation.status?
                <div className={cx("notification-fail")}>
                    Khách hàng vui lòng điền đầy đủ thông tin
                </div>:""
            }
         
        </div>:
        <div className={cx("list-empty")}>
            <div className={cx("container-list-empty")}>
                <div className={cx("icon-empty")}><MdOutlineRemoveShoppingCart/></div>
                <div className={cx("title-empty")}>Không có sản phẩm nào trong giỏ hàng</div>
                <div className={cx("button-empty")}>
                    <Link className={cx("container-button")} to="/">
                        QUAY VỀ TRANG CHỦ
                    </Link>
                </div>
            </div>
        </div>
        }
        </>
    );
}

export default SaleSlips;