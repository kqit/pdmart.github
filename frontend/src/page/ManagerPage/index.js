import axios from 'axios'
import { useState,useEffect } from 'react';
function ManagerPage() {
    const [category, setCategory] = useState();
    const [products, setProducts] = useState();
    useEffect(() => {
        axios.get("https://public.kiotapi.com/categories?currentItem=21",{
        headers:{
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE2Njg2OTE0NzEsImV4cCI6MTY2ODc3Nzg3MSwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiY2xpZW50X2lkIjoiZGI0OWNmZTctZDY4Ny00Nzg0LTliODgtYzE2MjJlMzg5NDU1IiwiY2xpZW50X1JldGFpbGVyQ29kZSI6InBodW9uZ2R1bmdtYXJ0IiwiY2xpZW50X1JldGFpbGVySWQiOiIxNDMwODIzIiwiY2xpZW50X1VzZXJJZCI6IjEzNTA2OTIiLCJjbGllbnRfU2Vuc2l0aXZlQXBpIjoiRmFsc2UiLCJpYXQiOjE2Njg2OTE0NzEsInNjb3BlIjpbIlB1YmxpY0FwaS5BY2Nlc3MiXX0.GzWwIlzpReZmzPLGtQFVYeg2MPhg7zgZdQslys5Jw5NSzppwe-dRJ3BE-dE9FTZU9zmmCmaSdm8jR4xH4NWWAfDiyGRb6FkIuOvJbxYqGzrl474nmGK55gpWTnO7qgCZakN3n8aKkiJAif5r2mIt5yVQlZ8g-rbRf0aOGwuqEIywRiKmfypX0TNJcMrXPlXe6XV_PwNU5377kNYVcJN-DcASysAQ0uP-B0GTBoj8H344P7LNNWUiFXMGvCETHKo3EYdeRS6BKPNO4LJxaQuvIhaGaNy0dRjaJGmjL2uF_t8EYWxNABEFhsQTLZZDwiYv5d0klrZ8XWN7W_bKPN3lWg",
            Retailer:"phuongdungmart"
        }
    })
    .then(res=>{
        setCategory(res.data.data)
    })
    }, []);
    useEffect(() => {
        axios.get("https://public.kiotapi.com/products?pageSize=100&currentItem=200",{
        headers:{
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE2Njg2OTE0NzEsImV4cCI6MTY2ODc3Nzg3MSwiaXNzIjoiaHR0cDovL2lkLmtpb3R2aWV0LnZuIiwiY2xpZW50X2lkIjoiZGI0OWNmZTctZDY4Ny00Nzg0LTliODgtYzE2MjJlMzg5NDU1IiwiY2xpZW50X1JldGFpbGVyQ29kZSI6InBodW9uZ2R1bmdtYXJ0IiwiY2xpZW50X1JldGFpbGVySWQiOiIxNDMwODIzIiwiY2xpZW50X1VzZXJJZCI6IjEzNTA2OTIiLCJjbGllbnRfU2Vuc2l0aXZlQXBpIjoiRmFsc2UiLCJpYXQiOjE2Njg2OTE0NzEsInNjb3BlIjpbIlB1YmxpY0FwaS5BY2Nlc3MiXX0.GzWwIlzpReZmzPLGtQFVYeg2MPhg7zgZdQslys5Jw5NSzppwe-dRJ3BE-dE9FTZU9zmmCmaSdm8jR4xH4NWWAfDiyGRb6FkIuOvJbxYqGzrl474nmGK55gpWTnO7qgCZakN3n8aKkiJAif5r2mIt5yVQlZ8g-rbRf0aOGwuqEIywRiKmfypX0TNJcMrXPlXe6XV_PwNU5377kNYVcJN-DcASysAQ0uP-B0GTBoj8H344P7LNNWUiFXMGvCETHKo3EYdeRS6BKPNO4LJxaQuvIhaGaNy0dRjaJGmjL2uF_t8EYWxNABEFhsQTLZZDwiYv5d0klrZ8XWN7W_bKPN3lWg",
            Retailer:"phuongdungmart"
        }
    })
    .then(res=>{
        console.log(res.data)
        setProducts(res.data.data)
    })
    }, []);
    const insertCategory=()=>{
        axios.post("http://localhost:5000/insertcategory",{
            category
        })
        console.log(category)
    }
    const insertProduct=()=>{
        axios.post("http://localhost:5000/insertproducts",{
            products
        })
        
    }
    console.log(category)
    return (  
        <div>
            <div onClick={()=>{insertCategory()}}>InsertCategory</div>
            <div onClick={()=>{insertProduct()}}>insertProduct</div>
        </div>
    );
}

export default ManagerPage;