const {Client }= require('pg')
const client=new Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: '123456',
        port: 5432,
    }
)
client.connect()
const CURDCategory={
    insertCategory:(res,req)=>{
        const data=res.body.category
        console.log(data.length)
        for (let i = 0; i < data.length; i++) {
            const query=`
            INSERT INTO category(id_cate,name_cate)
            VALUES 
                (${data[i].categoryId},'${data[i].categoryName}')
        `   
            client.query(query,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("Tạo bảng thành công")
                }
            })
            
        }
    },
    insertProduct:(req,res)=>{
        let data=[]
        data=req.body.products
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            const code=data[i].code.replace("-","")

            const query=`
            INSERT INTO products(code,name_product,img_product,price,id_cate)
            VALUES
                ('${code}','${data[i].name}','{${data[i].images}}',${data[i].basePrice},'${data[i].categoryId}')
        `
        client.query(query,(err)=>{
            if (err) {
                console.log(err)
            }
            else{
                console.log("Them thanh cong")
            }
        })
        }  
    },
    
}

module.exports=CURDCategory
