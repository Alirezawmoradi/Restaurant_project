import {HiShoppingCart} from "react-icons/hi";
import './fastFoodItem.css';
import {useEffect, useState} from "react";
import ImageLoading from "../ImageLoading/imageLoading";

const FastFoodItem = ({name, price, ingredients, imageUrl, delay}) => {
    const [imageLoading, setImageLoading] = useState(true);
    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            setImageLoading(false);
        };
    }, [imageUrl]);
    const renderContent = () => {
        if (imageLoading) {
            return (
                <ImageLoading/>
            )
        }
        return (
            <img className='card-img-top' src={imageUrl}/>
        )
    }
    return (
        <div className='card product-card h-100 border-0 shadow-sm pb-1 fade-in-horiz' style={{animationDelay: delay + 's'}}>
            <span
                className='badge badge-end badge-shadow bg-success fs-md fw-medium'>قیمت : {price.toLocaleString()} تومان</span>
            <div className='card__placeholder'>
                {renderContent()}
            </div>
            <div className='card-body text-center pt-3 pb-4 d-flex flex-column'>
                <h5 className='pb-2'>{name}</h5>
                <div className='fs-sm fw-bold text-muted mb-3'>
                    {ingredients}
                </div>
                <button className='btn btn-outline-success btn-sm w-100 mt-auto fw-bold'>
                    <HiShoppingCart className='fs-5 ms-3'/>
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    )
}
export default FastFoodItem;