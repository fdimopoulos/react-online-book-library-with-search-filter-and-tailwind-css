import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { BOOK_DETAILS_URL } from "../api/api";
// import "./BookDetails.css";

const BookDetails = () => {
    const [book, setBook] = useState({});

    const { id } = useParams(); // I call this "id" because I use this name also in <Route path='/books/:id'

    useEffect(() => {
        Axios.get(`${BOOK_DETAILS_URL}/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 gap-8 min-h-[80vh] max-w-[1440px] mx-auto p-8 overflow-x-hidden">
            <div className="col-span-1">
                <img
                    className="md:w-[350px] md:h-[500px] w-[260px] h-[400px] rounded-xl"
                    src={book.image_url}
                    alt="book-img"
                />
            </div>
            <div className="col-span-2 flex flex-col gap-4 px-8 md:px-4">
                <h2 className="text-blackish font-bold md:text-3xl text-2xl">
                    {book.title}
                </h2>
                <div>
                    <h3 className="text-blackish font-bold md:text-xl text-lg">
                        Author
                    </h3>
                    <p className="text-gray-800">{book.authors}</p>
                </div>
                <div>
                    <h3 className="text-blackish font-bold md:text-xl text-lg">
                        Description
                    </h3>
                    <p className="text-gray-800 text-justify">
                        {book.description}
                    </p>
                </div>
                <div>
                    <h3 className="text-blackish font-bold md:text-xl text-lg">
                        Genre
                    </h3>
                    <p className="text-gray-800">{book.genres}</p>
                </div>
                <div>
                    <h3 className="text-blackish font-bold md:text-xl text-lg">
                        Pages
                    </h3>
                    <p className="text-gray-800">{book.num_pages}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
