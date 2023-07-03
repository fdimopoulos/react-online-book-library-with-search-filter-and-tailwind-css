import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { BOOK_LIST_URL } from "../api/api";
import { FaSearch } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useContext(DarkModeContext);

    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(BOOK_LIST_URL)
            .then((res) => {
                // console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <div className="min-h-[80vh] dark:bg-slate-800 dark:text-whitish py-4">
                    <div className="flex items-center w-4/6 lg:w-6/12 h-12 px-4 mx-auto border-none rounded-lg shadow">
                        <FaSearch className="text-blackish w-6 h-6 dark:text-whitish" />
                        <input
                            className="bg-transparent w-full h-full ml-2 text-lg focus:outline-none dark:border-slate-500 dark:shadow-2xl"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for a book..."
                        />
                    </div>
                    <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden w-full mx-auto py-4 max-w-[1440px]">
                        {books
                            .filter((book) => {
                                return search === "" // if input/search is empty
                                    ? book // return all the books
                                    : book.title.toLowerCase().includes(search); // otherwise return the books that match the input/search value
                            })
                            .map((book) => (
                                <div
                                    key={book.id}
                                    className="flex flex-col justify-center items-center gap-4 w-80 my-4 text-center"
                                >
                                    <div>
                                        <h3 className="h-10 font-bold">
                                            {book.title}
                                        </h3>
                                    </div>
                                    <div>
                                        <img
                                            className="w-64 h-96 rounded-2xl duration-300 opacity-80 hover:opacity-100 cursor-pointer"
                                            src={book.image_url}
                                            alt="book-img"
                                            onClick={() =>
                                                navigate(`/books/${book.id}`)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <p>{book.authors}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookList;
