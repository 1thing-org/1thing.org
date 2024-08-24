import { Nav } from 'react-bootstrap';
import "./NavBar.css";

function Page({
  title,
  links,
}: {
  title: string;
  links: string;
}) {
  return (
    <Nav.Link className={`nav-link inner-text`} href={links}>{title}</Nav.Link>
  );
}

export default Page;
