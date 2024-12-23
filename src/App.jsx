import AddNewBlog from "./blog-app/add-new-blog"
import BlogList from "./blog-app/blog-list"
import CounterButton from "./counter-example/counter-button"
import CounterValue from "./counter-example/counter-value"

function App() {
  
  return (
    <>
      
        <h1 className="mx-auto text-center text-3xl font-roboto font-semibold">Redux Toolkit - Blog List App</h1>
        <AddNewBlog />
        <BlogList />
        {/* <CounterButton />
        <CounterValue /> */}
      
      
    </>
  )
}

export default App
