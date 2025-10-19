export default function Article() {
    return (
        <article className="container mx-auto p-7 ">
            <h2 className="text-2xl  font-bold ">📰 Latest News</h2>

            <div className="flex shadow-lg p-5 bg-white rounded-lg">
                <img className="w-56 shadow-lg rounded-lg" src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg " alt="" />
           
            <div className="ml-4">
                <h3 className="text-xl font-semibold"> 🚀Vite is Revolutionizing Frontend</h3>
                <p className="mt-2 text-gray-500">Vite is a next-gen frontend tool that deliversvast development</p>
             </div>
            </div>

        </article>
    )
}