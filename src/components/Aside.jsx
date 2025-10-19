import { FaBook, FaReact, FaRocket } from "react-icons/fa"
export default function Aside() {

    const link = [{
        name: "vite Documentation",
        icon: <FaBook />,
        herf: "#"

    },
    {
        name: "React Guide",
        icon: <FaReact />,
        herf: "#"

    },
    {
        name: "Frontend Trends",
        icon: <FaRocket />,
        herf: "#"

    },]

    return (
        <aside className=" p-5 bg-gray-300 rounded-md shadow-xl">
            <h1 className="text-xl font-bold">📌Related Link</h1>
            <ul className=" mt-2 space-y-2">
                {
                   link.map((item,index)=>{
                       return <li key={index}><a href={item.herf} className="flex items-center text-blue-500 gap-1 hover:underline">{item.icon}{item.name}</a></li>
                   })                    
                }
               
            </ul>
        </aside>)

}