import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import {IoLogoFacebook} from "react-icons/io"
import {AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
const cx=classNames.bind(styles)
const data=[{
    title:"Hỗ trợ khách hàng",
    list:[
        "Khiếu nại bồi thường",
        "Hướng dẫn thanh toán",
        "Hướng dẫn mua hàng",
        'Chính sách và Quy định chung',
        "Chính sách vận chuyển - Giao nhận",
        "Chính sách Đổi - Trả hàng hóa",
        "Chính sách Bảo hành",
    ]
},{
    title:"Về chúng tôi",
    list:[
        "Giới thiệu",
        "Liên hệ hợp tác",
        "Tuyển dụng",
        "Liên hệ mua hàng",
    ]
}
]
const connectWithUs=[
    {
        logo:IoLogoFacebook,
        name:"Facebook",   
    },
    {
        logo:AiFillTwitterCircle,
        name:"Twitter",   
    },
    {
        logo:AiFillInstagram,
        name:"Instagram",   
    },
]
const paymentValid=[
    {
        img:"https://meta.vn/images/icons/pay/visa.svg"
    },
    {
        img:"https://meta.vn/images/icons/pay/mastercard.svg"
    },
    {
        img:"https://meta.vn/images/icons/pay/internet-banking.svg"
    },
    {
        img:"https://meta.vn/images/icons/pay/cash.svg"
    },
]
function Footer() {
    return (  
        <div className={cx("wrapper")}>
                <div className={cx("footer-infor")}>
                    {data?  
                    data.map((item,index)=>{return(
                    <div key={index} className={cx("care-customer")}>
                        <div className={cx("title")}>
                            {item.title}
                        </div>
                        {item?
                            item.list.map((i,index)=>{
                                return(
                                    <div key={index} style={{
                                        cursor:"pointer",
                                        marginBottom:"9px"
                                    }}>
                                        {i}
                                    </div>
                                )
                            }):<></>
                        }
                    </div>
                )}):<></>}
                <div className={cx("connect-with-us")}>
                    <div className={cx("title")}>
                        Kết nối với chúng tôi
                    </div>
                    {
                        connectWithUs.map((item,index)=>{
                            const Logo=item.logo
                            return(
                                <div key={index} className={cx("container")}>
                                    <div className={cx("logo")}>
                                        <Logo/>
                                    </div>
                                    <div className={cx("name")}>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={cx("valid-payment")}>
                    <div className={cx("title")}>
                        Chấp nhận thanh toán
                    </div>
                    <div className={cx("container-img")}>
                        {
                            paymentValid.map((item,index)=>{
                                return(
                                    <div key={index} className={cx("img-payment")}>
                                        <img src={item.img}></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={cx("concat")}>
                    <div className={cx("title")}>
                        Liên hệ
                    </div>
                    Phone:
                    <div className={cx("phone")}>
                        098.589.9056
                    </div>
                    <div className={cx("email")}>
                        Email: Maximkoreavn@gmail.com
                    </div>
                </div>
            </div>
            <div className={cx("brand")}>
                <div>PDMART</div>
                <div>
                    Uy tín cung cấp các sản phẩm gia dụng chất lượng tại nhà toàn quốc
                    Giấy chứng nhận ĐKDN số 0102196915 do Sở KH&ĐT TP. Hà Nội cấp ngày 29/03/2007
                </div>
            </div>
            <div className={cx("address")}>
                <b>Địa chỉ</b>: Khu công nghiệp Lai Vu, Xã Lai Vu, huyện Kim Thành, tỉnh Hải Dương. Điện thoại: 098.589.9056. Email: Maximkoreavn@gmail.com . Chịu trách nhiệm nội dung: Nguyễn Văn Đóa.
            </div>
        </div>
        
    );
}

export default Footer;