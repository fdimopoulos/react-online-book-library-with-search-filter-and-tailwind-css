import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
    return (
        <>
            <DarkModeProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/books/:id" element={<BookDetails />} />
                </Routes>
                <Footer />
            </DarkModeProvider>
        </>
    );
}

export default App;
