import React from 'react'

const NewsCard = ({ details }) => {

    return (
        <>


            <div className="shadow-sm dark:bg-[#28292c] rounded-lg overflow-hidden">

                <div className="h-37.5 md:h-50 w-full overflow-hidden">
                    <img
                        src={details.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJd2pAaxhXoz1wNPNymf1C3ViXwWXNReKuGw&s'}
                        alt={details.title}
                        onClick={() => window.open(details.url)}
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col">
                    <h2
                        className="text-lg font-semibold line-clamp-2 cursor-pointer hover:underline"
                        onClick={() => window.open(details.url)}
                    >
                        {details.title}
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-3">
                        {details.description}
                    </p>

                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => window.open(details.url)}
                            className="px-5 py-2 border border-gray-400 dark:border-gray-600 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            Read More
                        </button>
                    </div>
                </div>
            </div>







        </>
    )
}

export default NewsCard