import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/books/:id" element={<BookDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
