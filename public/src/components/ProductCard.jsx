import { Link } from "react-router-dom"

export default function ProductCard({items}){
    
    const {thumbnail ,category,title,price,id} = items

     return(
      <Link to={`/products/${id}`} className="lg:w-80 md:w-1/2 p-4 mt-12 m-1 w-full  shadow border-gray-500 border rounded">
        <div >
 
    <img
      alt="ecommerce"
      className="object-cover object-center w-full h-60 block"
      src={thumbnail}
      />
 
  <div className="mt-4 ">
    <h3 className="text-white tracking-widest title-font mb-1">
     {category.charAt(0).toUpperCase() + category.slice(1)}
    </h3>
    <h2 className="text-white title-font text-lg font-medium">
      {title}
    </h2>
    <p className="mt-1">{price}</p>
  </div>
</div>
      </Link>

     )
}