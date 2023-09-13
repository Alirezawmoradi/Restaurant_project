import './loading.css'

const Loading = ({theme}) => {
    return (
        <div className='d-flex justify-content-center m-auto'>
            <div className={`dots text-${theme || 'success'}`}>
            </div>
        </div>
    )
}
export default Loading;