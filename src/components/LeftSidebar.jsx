import { useEffect, useState } from "react";
import { useNewsContext } from "../context/NewsContext";
import api from "../config/axios";
import SidebarSkeleton from "./SidebarSkeleton";

const LeftSidebar = () => {
  const { sidebar, setSidebar, latestNews, setLatestNews } = useNewsContext();
  const [loading, setLoading] = useState(false);



  return (
    <>

      <div
        onClick={() => setSidebar(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity
        ${sidebar ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

     
      <aside
        className={`fixed top-0 right-0 h-screen w-80 z-50
        bg-white dark:bg-[#28292c]
        shadow-lg transition-transform duration-300
        ${sidebar ? "translate-x-0" : "translate-x-full"}`}
      >
 
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-bold">Latest News</h2>
          <button onClick={() => setSidebar(false)} className="text-xl">✕</button>
        </div>

      
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-64px)] ">
          {loading &&
            Array.from({ length: 5 }).map((_, i) => (
              <SidebarSkeleton key={i} />
            ))}

          {!loading &&
            latestNews.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSidebar(false)}
                className="flex gap-3 group shadow-sm"
              >
         
                <img
                  src={item.image || "/news-placeholder.jpg"}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md shrink-0 bg-gray-200"
                />

              
                <div>
                  <p className="text-sm font-medium line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {item.title}
                  </p>
                  <span className="text-xs opacity-60">
                    {item.source?.name}
                  </span>
                </div>
              </a>
            ))}

          {!loading && latestNews.length === 0 && (
            <p className="text-sm opacity-60">No news available</p>
          )}
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;
