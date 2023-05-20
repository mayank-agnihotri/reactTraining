export default function Product(){
    // const products = ["Laptop","Phone","Modem"];
    // return (
    //     <div>
    //         {/*{products.map(product=>{ return (<h1> {product} </h1>)} )}*/}
    //         {products.map(product=>{ return (<h1> {product} </h1>)} )}
    //     </div>)

    // const products = ["Laptop","Phone","Modem"];
    // const productList = products.map(product=>(<h1> {product} </h1>))
    // return (
    //     <div>
    //         {productList}
    //     </div>)


    const products = [ {id:1 , name:"Laptop", price:100},
        {id:2, name:"Phone",price:200},
        {id:3, name:"Modem",price:300},
        {id:4, name:"Mouse",price:400}];
    const productList = products.map(product=>(<h1>Id: {product.id} | Name: {product.name} | Price: {product.price} </h1>))
    return (
        <div>
            {productList}
        </div>)
}