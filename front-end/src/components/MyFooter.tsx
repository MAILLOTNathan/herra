import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter: React.FC<({ styleClass: string })> = ({ styleClass }) => {
  return (
    <Footer container className={styleClass}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              className="px-4 py-2"
              href="/"
              src="assets/h_logo.png"
              alt="Hera Logo"
              name=""
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="A propos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Bon à savoir
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Suivez nous" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#">
                  X - Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Mentions légales" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  CGV
                </Footer.Link>
                <Footer.Link href="#">
                  RGPD
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Herra" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default MyFooter;
