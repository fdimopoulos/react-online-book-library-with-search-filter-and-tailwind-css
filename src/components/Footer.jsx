const Footer = () => {
    return (
        <div className="flex justify-center items-center h-[10vh] w-full bg-blackish text-whitish">
            <p>&copy; {new Date().getFullYear()} by Fotis</p>
        </div>
    );
};

export default Footer;
