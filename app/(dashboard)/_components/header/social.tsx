import {FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa"

const Social = () => {
  return (
    <div className="flex items-center space-x-2">
        <FaYoutube className="h-4 w-4 text-red-700" />
        <FaTwitter className="h-4 w-4 text-blue-300" />
        <FaTiktok className="h-4 w-4 text-gray-900" />

    </div>
  )
}

export default Social