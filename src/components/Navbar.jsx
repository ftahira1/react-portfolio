import "../styles/Navbar.css";

const NavList = [
    {
        name: "About Me",
        link: "#about-me",
        id: 4
    },
    {
        name: "Work",
        link: "#work",
        id: 5
    },
    {
        name: "Contact Me",
        link: "#contact-me",
        id: 6
    }
]

function Navbar() {
    return (
<nav >
    <ul>
    {
        NavList.map((list) => (
            <li key={list.id}>
                <a href={list.link}>
                    {list.name}
                </a>
            </li>
        ))
    }
    </ul>
</nav>
  )}

  export default Navbar;