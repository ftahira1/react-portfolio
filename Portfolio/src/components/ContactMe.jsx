import "../styles/ContactMe.css";

const contactList = {
    name: "Contact Me",
    phoneNumber: "215-869-8477",
    email: "timtahiraj@kw.com",
    agentLink: "https://kw.com/agent/UPA-6983160918647312384-4",
    Github: "https://github.com/ftahira1"
}

function ContactMe() {
    return (
      <footer className="contact-me">
        <h2>{contactList.name}</h2>
        <section>
            <ul>
                <li>{contactList.phoneNumber}</li>
                <li>{contactList.email}</li>
                <li><a href={contactList.agentLink}>timtahiraj@kw.com</a></li>
                <li><a href={contactList.Github}>Github</a></li>
            </ul>
        </section>
      </footer>
    );
  }

  export default ContactMe;