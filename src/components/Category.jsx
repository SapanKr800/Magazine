import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = () => {
    const categories = [
        "general",
        "world",
        "nation",
        "business",
        "science",
        "sports",
        "technology",
        "entertainment",
    ];

    const { cate, setCate } = useNewsContext();

    return (
        <div >
            <Wrapper>
                <ul className="flex gap-2 overflow-x-auto py-2 justify-center">
                    {categories.map((category) => {
                        const isActive = cate === category;

                        return (
                            <li key={category}>
                                <button
                                    onClick={() => setCate(category)}
                                    className={`px-4 py-2 rounded-md whitespace-nowrap transition-all cursor-pointer
                   ${isActive
                                            ? "bg-[#3517df] text-white"
                                            : "bg-[#ebedf1] text-[#000000]"
                                        }
`}
                                >
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </Wrapper>
        </div>
    );
};

export default Category;
