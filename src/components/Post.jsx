import avatar from '../assets/avatarIcon.png'
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShare  } from "react-icons/fa";

const Post = () => {
    return (
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
            <div className="md:flex">
                    <div className="md:flex-shrink-0 flex items-center ml-6">
                        <img className="h-24 w-24" src={avatar} alt="User avatar" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-blue-800 font-semibold">John Doe</div>
                            <p className="mt-2 text-gray-500">Feb 20, 2023</p>
                            <p className="block mt-1 text-lg leading-tight font-medium text-black">This is a sample post in a Facebook-like social media app.</p>
                        <div className="mt-4 flex items-center">
                            <button className="text-blue-800 hover:text-blue-600 mr-4">
                                <AiFillLike />
                            </button>
                            <button className="text-blue-800 hover:text-blue-600 mr-4">
                                <FaComment />
                            </button>
                            <button className="text-blue-800 hover:text-blue-600">
                                <FaShare />
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post