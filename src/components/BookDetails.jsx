import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "./BookDetails.css";
import { BOOK_DETAILS_URL } from "../api/api";

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
        <div className="book__details--container">
            <div className="book__image">
                <img src={book.image_url} alt="book-img" />
            </div>
            <div className="book__details">
                <h2>{book.title}</h2>
                <div>
                    <h3>Author</h3>
                    <p>{book.authors}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p className="book__description">{book.description}</p>
                </div>
                <div>
                    <h3>Genre</h3>
                    <p>{book.genres}</p>
                </div>
                <div>
                    <h3>Pages</h3>
                    <p>{book.num_pages}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
