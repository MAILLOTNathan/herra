import { Avatar, Dropdown, Navbar } from "flowbite-react";

const NavBar: React.FC<({ currentRoute: string })> = ({ currentRoute }) =>{
  return (
    <Navbar fluid rounded className="z-10 bg-white">
      <Navbar.Brand href="/">
        <img src="assets/h_logo.png" className="mr-3 h-6 sm:h-9" alt="Hera Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          className="absolute z-20"
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/fil" active={currentRoute === "fil"} className="">
          Fil
        </Navbar.Link>
        <Navbar.Link href="/trajets" active={currentRoute === "trajets"} className="">
            Trajets Fav
        </Navbar.Link>
        <Navbar.Link href="/services" active={currentRoute === "services"} className="">
            Services
        </Navbar.Link>
        <Navbar.Link href="/abonnements" active={currentRoute === "abonnements"} className="">
            Abonnements
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;