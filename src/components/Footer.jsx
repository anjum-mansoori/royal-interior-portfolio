function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>
                &copy; {currYear} Royal Interior Designer. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;