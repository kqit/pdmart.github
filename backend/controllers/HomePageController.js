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
const HomePageController={
    getClassCategory:async(req,res)=>{
        const query=`
        SELECT * FROM classcategory LIMIT ${req.query.count}
        `
        const data= await client.query(query)
        res.send(data.rows)
    },
    getCategory:async(req,res)=>{
        const query=`
        SELECT * FROM category
        WHERE id_class='${req.query.id}'
        `
        const data=await client.query(query)
        res.send(data.rows)
    },
    getProducts:async(req,res)=>{
        const query=`
        SELECT * FROM products
        WHERE id_cate='${req.query.id}'
        `
        const data=await client.query(query)
        res.send(data.rows)
    },
    getDeal:async(req,res)=>{
        const query=`
        SELECT * FROM products
        WHERE 
            sale>20
        LIMIT 20
        `
        const data= await client.query(query)
        res.send(data.rows)
    },
    getFouYou:async (req,res)=>{
        const query=`
            SELECT * FROM products LIMIT ${req.query.count} OFFSET ${req.query.start} `
        console.log(req.query)
        const data= await client.query(query)
        res.send(data.rows)
    }
}
module.exports=HomePageController