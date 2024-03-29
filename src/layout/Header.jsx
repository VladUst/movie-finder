function Header() {
    return (
        <nav className="purple darken-4">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    Movie Finder
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/VladUst/movie-finder">
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export { Header };
