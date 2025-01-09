import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import "./NavBar.css";

function Dropdown({
  title,
  dropdownItems,
}: {
  title: string;
  dropdownItems: { title: string, links: string }[];
}) {
  return (
    <NavDropdown title={<span className="title-spacing">{title}</span>} className={`nav-dropdown inner-text`}>
      {dropdownItems.map((item, index) => (
        <NavDropdown.Item as={Link} to={item.links} className="inner-text">{<span className="title-spacing">{item.title}</span>}</NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

export default Dropdown;