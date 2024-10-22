import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;