import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({fastFoodItems})=>{
return(
    <div className='row'>
        {fastFoodItems.map(item=>{
            return (
                <div className='col-md-4 col-sm-3 mb-grid-gutter' key={item.id}>
                    <FastFoodItem {...item}/>
                </div>
           )
            }

        )}
    </div>
)
}
export default FastFoodList;