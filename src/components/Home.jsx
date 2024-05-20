import Post from './Post'
import SideBar from './SideBar'
import ThinkingBox from './ThinkingBox'


const Home = () => {
    return (
        <div className="flex justify-between w-11/12 mx-auto">
            <div className="w-1/4 h-full">
                <SideBar />
            </div>
            <div className="w-1/2">
                <ThinkingBox />
                <Post />
            </div>
            <div className="w-1/4">
                <SideBar />
            </div>
        </div>
    )
}


export default Home