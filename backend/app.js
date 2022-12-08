const express=require('express')
const { Client } = require('pg')
const morgan=require('morgan')
const BodyParser=require('body-parser')
const dotevn=require('dotenv')
const cors=require('cors')
const index=require('./routers/index.js')

dotevn.config()
const app=express()
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended:true}))
app.use(morgan('combined'))
app.use(cors())
app.use('/',index)
app.use(express.static('public'))

const client=new Client(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'testdb',
        password: '123456',
        port: 5432,
    }
)
client.connect()
const query = `
SELECT * FROM users
`;
const insert=`
INSERT INTO users (email, firstname, lastname, age)
VALUES 
    ('huyhoang@gmail.com','hoang','huy',20);
`

app.listen(5000,()=>{
    console.log("server is run")
})
