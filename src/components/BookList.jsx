import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./BookList.css";
import { BOOK_LIST_URL } from "../api/api";
import { FaSearch } from "react-icons/fa";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

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
            <div className="search__bar">
                <FaSearch className="search__icon" />
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Book search..."
                />
            </div>
            <div className="book__container">
                {books
                    .filter((book) => {
                        return search === "" // if input/search is empty
                            ? book // return all the books
                            : book.title.toLowerCase().includes(search); // otherwise return the books that match the input/search value
                    })
                    .map((book) => (
                        <div key={book.id} className="book__item">
                            <div>
                                <h3 className="book__title">{book.title}</h3>
                            </div>
                            <div>
                                <img
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
        </>
    );
};

export default BookList;
