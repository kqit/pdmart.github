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
const CartPageController={
    getListItem:async (req,res)=>{
        console.log(req.query.code)
        const query=`
            SELECT * FROM products
            WHERE code='${req.query.code}'
        `
        const data=await client.query(query)
        res.send(data.rows)

    }
}
module.exports=CartPageController