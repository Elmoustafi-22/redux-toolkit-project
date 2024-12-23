import { useDispatch, useSelector } from "react-redux";
import { handleAddToBlog, handleEditBlog, handleInputChange, setCurrentEditedBlogId } from "../store/slices/blogSlice";


function AddNewBlog(){
    const state = useSelector(state => state.blog)
    const dispatch =  useDispatch()
    const {currentEditedBlogId} = state

    function onChangeInput(e){
        dispatch(handleInputChange({
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(currentEditedBlogId !== null) {
            dispatch(handleEditBlog())
        } else {
            dispatch(handleAddToBlog())
        }
        
        if(currentEditedBlogId !== null) dispatch(setCurrentEditedBlogId({
            currentBlogId : null,
        }))
        dispatch(handleInputChange({
            description: '',
            title: ''
        }))
    }

    console.log(state)

    return (
        <div className=" container mt-20 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col">
                    <label htmlFor="title" className="font-poppins text-left text-[15px] text-sm">Enter Blog Title:</label>
                    <input 
                        type="text"
                        name="title"
                        placeholder="Enter blog title"
                        id="title"
                        onChange={onChangeInput}
                        value={state?.formData?.title}
                        className="px-2 py-1 text-sm border border-sky-400 focus:outline-none rounded font-light"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-[15px] font-poppins text-sm">Enter Blog Description:</label>
                    <input 
                        type="text"
                        name="description"
                        placeholder="Enter blog description"
                        id="description"
                        onChange={onChangeInput}
                        value={state?.formData?.description}
                        className="px-2 py-1 text-sm border border-sky-400 focus:outline-none rounded font-light"
                    />
                </div>
                <div className="">
                    <button type="submit" className="text-center text-sm font-montserrat font-semibold text-slate-50 w-full px-2 py-1 bg-sky-950 hover:bg-sky-800 transition rounded-lg">
                        {
                            state?.currentEditedBlogId ? 'Edit Blog' : 'Add New Blog'
                        }
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddNewBlog;