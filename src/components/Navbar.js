import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href='/about'>About</Link>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;