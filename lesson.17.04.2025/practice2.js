import express from "express"
const server = express()
const PORT=process.env.PORT || 4545
server.use(express.json())

let products=[
    {
            id: 1,
            name: "Samsung Galaxy A52",
            category: "Telefon",
            price: 3200000,
            image: "samsung-a52.jpg",
            in_stock: true,
          },
          {
            id: 2,
            name: "Apple MacBook Air",
            category: "Noutbuk",
            price: 12000000,
            image: "macbook-air.jpg",
            in_stock: true,
          },
          {
            id: 3,
            name: "JBL Wireless Headphones",
            category: "Audio",
            price: 800000,
            image: "jbl-headphones.jpg",
            in_stock: false,
          }
]

server.get("api/products",(req,res)=>{
    res.json(products)
})

server.post("/api/products",(req,res)=>{
    const newProduct=req.body
    const newId=products.length?products[products.length-1].id+1:1
    const createdProduct={id:newId, ...newProduct}
    products.push(createdProduct)
    res.status(201).json(createdProduct)
})

server.put("/api/products",(req,res)=>{
    const productId=parseInt(req.headers["x-product-id"])
    const updates=req.body
    const product=products.find(p=>p.id===productId)

    if (!product) {
        return res.status(404).json({message:"Mahsulot topilmadi"})
    }

    Object.assign(product,updates)
    res.json(product)
})

server.delete("/api/products",(req,res)=>{
    const productId=parseInt(req.headers["x-product-id"])
    const index=products.findIndex(p=>p.id===productId)

    if (index===-1) {
        return res.status(404).json({message:"Mahsulot topilmadi"})
    }

    products.splice(index,1)

    res.json({
        message:"Mahsulot muvaffaqiyatli o'chirildi",
        id: productId
    })
})

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);    
})