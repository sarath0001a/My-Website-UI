import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa"


export default function Navbar() {
    return (<nav className="bg-gray-900 text-white p-4">
        <div className="container flex mx-auto items-center justify-between ">
            <h1 className="font-bold text-2xl">🚀My Website</h1>
            <ul className="flex  space-x-6">
                <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"> <FaHome /> Home</li>
                <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"> <FaInfoCircle />About</li>
                <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"> <FaServicestack />Services</li>
                <li className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"> <FaEnvelope />Contact</li>

    </ul>
        </div>

    </nav>)
}