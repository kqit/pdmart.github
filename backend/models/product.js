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
const query = `
CREATE TABLE users (
    email varchar,
    firstName varchar,
    lastName varchar,
    age int
);
`;
const createCategoryTable=`
    CREATE TABLE category(
        id_Cate char(10) NOT NULL UNIQUE PRIMARY KEY,
        name_Cate varchar(120) NOT NULL 
    );
`
const createClassCategoryTable=`
    CREATE TABLE PUBLIC.class(
        id_Class char(10) NOT NULL UNIQUE PRIMARY KEY,
        name_Class char(30) NOT NULL UNIQUE,
    );
`
const createProductsTable=`
    CREATE TABLE public.products(
        code char(10) NOT NULL UNIQUE PRIMARY KEY,
        name_Product varchar NOT NULL,
        img_Product text[],
        goodwill varchar,
        price integer NOT NULL DEFAULT 0,
        sale integer DEFAULT 0,
        inventory smallint DEFAULT 0,
        rate_Point real DEFAULT 0.0,
        rate_Quantity smallint DEFAULT 0,
        id_Cate varchar REFERENCES category(id_Cate),
        description text,
        FOREIGN KEY (id_Cate) REFERENCES category(id_Cate)
    )
`
/*const handleCreateClass=client.query(createClassCategoryTable,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Tạo bảng thành công")
    }
    client.end()
})*/
/*client.query(createCategoryTable,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Tạo bảng thành công")
    }
    client.end()
})*/
/*const handleCreateProducts=client.query(createProductsTable,(err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Tạo bảng thành công")
    }
    client.end()
}
)*/
