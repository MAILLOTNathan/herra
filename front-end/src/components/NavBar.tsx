import { Avatar, Dropdown, Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid rounded className="z-10">
      <Navbar.Brand href="/">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
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
        <Navbar.Link href="/fil" active>
          Fil
        </Navbar.Link>
        <Navbar.Link href="/trajets">
            Trajets Fav
        </Navbar.Link>
        <Navbar.Link href="/services">
            Services
        </Navbar.Link>
        <Navbar.Link href="/abonnements">
            Abonnements
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
