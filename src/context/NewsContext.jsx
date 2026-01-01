import { createContext, useContext, useEffect, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cate, setCate] = useState("business");
    const [search, setSearch] = useState(""); // ✅ added
    const [dark, setDark] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [latestNews, setLatestNews] = useState([]);




    const fetchNews = async () => {
        setLoading(true);
        try {
            const response = await api.get(
                `/news?category=${cate}`
            );
            setData(response.data.articles); // ✅ fixed
            setSearch("");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };



    // 🔹 Search news
    const fetchSearchNews = async (query) => {
        if (!query) return;

        setLoading(true);
        try {
            const res = await api.get(
               `/news?q=${query}`

            );
            setData(res.data.articles);
            setCate(null);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);

        }



    };

    // 🔹 Decide which API to call
    useEffect(() => {
        const timer = setTimeout(() => {
            if (search.trim()) {
                fetchSearchNews(search);


            } else {
                fetchNews();
            }
        }, 500);

        return () => clearTimeout(timer);

    }, [search, cate]);

    const fetchLatestNews = async () => {
        setLoading(true);
        try {
            const res = await api.get(
             `/news`
            );
            setLatestNews(res.data.articles || []);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // fetch only when sidebar opens
    useEffect(() => {
        if (sidebar && latestNews.length === 0) {
            fetchLatestNews();
        }
    }, [sidebar]);




    useEffect(() => {

        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);


    return (
        <NewsContext.Provider
            value={{
                data,
                setData,
                search,
                setSearch,
                loading,
                setLoading,
                cate,
                setCate,
                dark,
                setDark,
                sidebar,
                setSidebar,
                latestNews,
                setLatestNews

            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

const useNewsContext = () => useContext(NewsContext);

export { useNewsContext, NewsContextProvider };
