import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import CategoryChip from "./CategoryChip"
import Header from "./Header"

function Product(){

    const [products ,setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading , setLoading] = useState(true)
    const [chosenCategory , setChosenCategory] = useState("All")

  useEffect(()=>{
    console.log("use Effect call");
    const url = chosenCategory === "All" ?
    "https://dummyjson.com/products":
    `https://dummyjson.com/products/category/${chosenCategory}`
    axios.get(url)
    .then((res)=> {
    setProducts(res.data.products)
    setLoading(false)
    })
    .catch((error)=> 
      {console.log(error)
        setLoading(false)
      }
    
  )
  },[chosenCategory])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=> {
      setCategories(res.data)
    setLoading(false)
    })
    .catch((error)=> 
      {console.log(error)
        setLoading(false)
      }
    
  )
  },[])

  
    return(
       <div className="container mx-auto">
        {loading ?( 
       <h1 className="text-center text-3xl">Loading....</h1>
      ):(
        <div>
          <Header/>
          <div className="flex flex-wrap gap-2">
        <CategoryChip
        onClick={()=> setChosenCategory("All")}
        inChosen={chosenCategory === "All"}
        category={{
          slug:"All",
          name:"All",
        }}/>
        
        {categories.map((category)=> <CategoryChip
        onClick={()=> setChosenCategory(category.slug)
        }
        inChosen = {category.slug === chosenCategory}
         category={category}
         key={category.slug}/>
         )}
          </div>
      <div className="flex flex-wrap -m-4">
        {products.map((item)=>( 
          <ProductCard items={item} key={item.id}/>
        ))
      }
      </div>
      </div>
    )}
       </div>
    );
}

export default Product