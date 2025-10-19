export default function Hero() {
    return (
        <section className="bg- bg-gray-200  text-center py-16">
           <img  className="mx-auto rounded-lg h-40 w-72 shadow-md " src="https://www.ducatindia.com/_next/image?url=https%3A%2F%2Fadmin.ducatindia.com%2Fblog%2F1737465366012ui-ux-design-portfolio.jpg&w=750&q=75" alt="" />
           <h2 className="text-3xl font-bold mt-4">🎨Build Amazing UIs with React & Vite </h2>
           <p className="text-gray-500 mt-2">Fast, lightweight,and modern frotend development.</p>
           <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-800 transition text-white mt-4">🚀 Get Started</button>
        </section>
    )
}