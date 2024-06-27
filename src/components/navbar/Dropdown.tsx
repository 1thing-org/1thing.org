import { LinkContainer } from 'react-router-bootstrap';
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
        <LinkContainer key={index.toString()} to={item.links}>
          <NavDropdown.Item className="inner-text">{<span className="title-spacing">{item.title}</span>}</NavDropdown.Item>
        </LinkContainer>
      ))}
    </NavDropdown>
  );
}

export default Dropdown;