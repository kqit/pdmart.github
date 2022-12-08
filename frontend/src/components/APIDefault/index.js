import axios from "axios";
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { addProduct } from "../../redux/reducers/cart";
import { changeInformationPage } from "../../redux/reducers/InformationProductPage";
function APIDefault() {
    useEffect(() => {
        
    }, [window.location.pathname]);

    const dispatch=useDispatch()
    const check=useSelector(state=>state.informationProductPage).code
    const AddToCart=(data)=>{
        const action={...data,amount:1}
        dispatch(addProduct(action))
    }
    const refreshDataInfor=(data)=>{
        const action=data
        dispatch(changeInformationPage(action))
    }
    useEffect(() => {
        if(localStorage.getItem("code")){
            const listItemCart=localStorage.getItem("code").split(",")
            listItemCart.forEach(item=>{
                if(item){
                    axios.get(`http://localhost:5000/cart/getitem?code=${item}`)
                    .then(res=>{
                        AddToCart(res.data[0])
                    })
                }   
            })
        }
    }, [])
    if(check=="0001"){
        const path=window.location.pathname.split("-")
        const code=path[path.length-1].toUpperCase()
        axios.get(`http://localhost:5000/information/data?code=${code}`)
        .then(res=>refreshDataInfor(res.data[0]))
    }
    return (  
        <Fragment></Fragment>
    );
}

export default APIDefault;