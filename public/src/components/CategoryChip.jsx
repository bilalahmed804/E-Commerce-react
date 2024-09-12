export default function CategoryChip({category,inChosen,onClick}){

   const {name} = category
    
return(
    <div
    onClick={onClick} className={`${inChosen ? 
        "bg-gray-500 text-white": 
        "bg-white text-black"}
        rounded-md cursor-pointer hover:bg-gray-200 p-2 border-gray-500 border px-4" `}>
        <button>{name}</button>
    </div>
)
}