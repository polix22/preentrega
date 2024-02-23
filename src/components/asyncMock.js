const products=[
    {
        id:"1",
        name:"pepe",
        price:"5000",
        category: "Nintendo",
        img:"https://nextgames.com.ar/img/Public/1040/producto-818m9wgy0ll-sl1500-8694.jpg",
        stock:"3",
        description:"descripcion de producto"
    },
    {id:"2", name: "pepa", price:"4000", category:"Nintendo",img:"https://nextgames.com.ar/img/Public/1040-producto-cod-mw3-ps5-7041.jpg", stock:"5",description:"descripcion del producto" },
    {id:"3", name: "pepita", price:"56667", category:"PayStation", img:"https://nextgames.com.ar/img/Public/1040/producto-9505814d-4eca-4431-93b2-7b66cbfa8779-5187.jpeg", stock:"12", description:"descripcion del producto"},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId)=> {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
        
    })
    
}
export const getProductsByCategory = (productCategory)=> {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
        
    })
    
}