import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    formData: {
        title  : '',
        description : '',
    },
    blogList : [],
    currentEditedBlogId: null
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputChange: (state, action) => {
            let cpyFormData = {...state.formData}

            cpyFormData = {
                ...cpyFormData,
                ...action.payload
            }

            state.formData = cpyFormData
        },

        handleAddToBlog: (state, action)=> {
            console.log("handleEditBlog is called");
            console.log(action)
            state.blogList.push({
                id: nanoid(),
                ...state.formData
            })

            state.formData = {
                title: '',
                description: ''
            }

            localStorage.setItem('blogList', JSON.stringify(state.blogList))
        },

        setBlogListOnIntialLoad: (state, action) => {
            state.blogList = action.payload.blogList
        },

        handleDeleteBlog: (state, action) => {
            console.log(action)
            const {payload} = action;
            const {currentBlogId} = payload
            
            let cpyBlogList = [...state.blogList]

            cpyBlogList = cpyBlogList.filter(blogItem => blogItem.id !== currentBlogId)

            state.blogList = cpyBlogList;

            localStorage.setItem('blogList', JSON.stringify(cpyBlogList))
        },

         setCurrentEditedBlogId: (state, action) => {
            console.log(action)
            const { payload } = action;
            const { currentBlogId } = payload;

            state.currentEditedBlogId = currentBlogId
         },

         handleEditBlog: (state, action) => {
            console.log('handleEditBlog is called')
            let cpyBlogList = [...state.blogList]

            const indexOfCurrentBlog = cpyBlogList.findIndex(blogItem => blogItem.id === state.currentEditedBlogId)
            
            cpyBlogList[indexOfCurrentBlog] = {
                ...cpyBlogList[indexOfCurrentBlog],
                ...state.formData
            }

            state.blogList = cpyBlogList;
            localStorage.setItem('blogList', JSON.stringify(cpyBlogList))
         }
    }
})

export const {
  handleInputChange,
  handleAddToBlog,
  setBlogListOnIntialLoad,
  handleDeleteBlog,
  setCurrentEditedBlogId,
  handleEditBlog,
} = blogSlice.actions;
export default blogSlice.reducer