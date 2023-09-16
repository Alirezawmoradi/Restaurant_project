import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({fastFoodItems})=>{
    let delay = 0.1 ;
return(
    <div className='row'>
        {fastFoodItems.map(item=>{
            delay += 0.030;
            return (
                <div className='col-md-4 col-sm-3 mb-grid-gutter' key={item.id}>
                    <FastFoodItem {...item} delay={delay}/>
                </div>
           )
            }

        )}
    </div>
)
}
export default FastFoodList;