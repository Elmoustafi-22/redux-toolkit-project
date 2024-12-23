import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteBlog, handleInputChange, setBlogListOnIntialLoad, setCurrentEditedBlogId } from "../store/slices/blogSlice";


function BlogList() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.blog)
    
    const {blogList} = state;
    console.log(blogList)

    function onDeleteBlog(getId){
        console.log(getId)
        dispatch(handleDeleteBlog({
            currentBlogId : getId
        }))
    }

    function onEditBlog(getId){
        dispatch(setCurrentEditedBlogId({
            currentBlogId : getId?.id,
        }))

        dispatch(handleInputChange({
            title : getId?.title,
            description : getId?.description,
        }))
    }

    useEffect(() => {
        dispatch(setBlogListOnIntialLoad({
            blogList: JSON.parse(localStorage.getItem('blogList')) || []
        }))
    }, [])

    return (
        <div className="container mt-8 flex flex-col justify-center items-center">
            <h1 className=" text-xl font-poppins font-semibold">Blog List:</h1>
            <div >
                <ul className="">
                {
                    blogList?.length > 0 ?
                    blogList.map(blogItem => <div key={blogItem?.id} className="w-[280px] mt-2 rounded p-2 border border-violet-400 flex flex-col gap-2">
                        <h3 className="text-left flex flex-col font-semibold font-inter">Title: <span className="font-montserrat font-light">{blogItem?.title}</span></h3>
                        <hr className="w-full border border-violet-300"/>
                        <p className="flex flex-col text-left font-semibold font-inter">Description: <span className="font-roboto font-light italic">{blogItem?.description}</span></p>
                        <div className="flex flex-row grow justify-center gap-1">
                            <button onClick={() => onEditBlog(blogItem)} className="text-sm px-2 py-1 bg-violet-500 hover:text-violet-500 border border-violet-500 hover:bg-white transition text-white font-lato rounded">Edit Blog</button>
                            <button onClick={() => onDeleteBlog(blogItem?.id)} className="text-sm px-2 py-1 bg-white border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-lato rounded transition">Delete Blog</button>
                        </div>
                    </div>)
                    : <h1>No blog added! Please add one</h1>
                }
            </ul>
            </div>
            
        </div>
    )
}

export default BlogList;