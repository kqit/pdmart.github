const CURDCategory=require("../controllers/ProductController")
const HomePageController=require("../controllers/HomePageController")
const CartPageController = require("../controllers/CartPageController")
const InformationPageController = require("../controllers/InformationPageController")

const router=require('express').Router()

router.post("/insertcategory",CURDCategory.insertCategory)
router.post("/insertproducts",CURDCategory.insertProduct)
router.get('/home/foryou',HomePageController.getFouYou)
router.get('/cart/getitem',CartPageController.getListItem)
router.get('/home/deal',HomePageController.getDeal)
router.get('/home/class-category',HomePageController.getClassCategory)
router.get('/home/category',HomePageController.getCategory)
router.get('/home/products',HomePageController.getProducts)
router.get('/information/data',InformationPageController.getData)

module.exports=router