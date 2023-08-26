import "../../App.css";
import SocialList from "./SocialList";
import FooterList from "./FooterList";
import Form from "./Form";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div
          class="footer-top"
          style={{ backgroundImage: `url('./images/footer-illustration.png')` }}
        >
          <div class="container">
            <div class="footer-brand">
              <a href="" class="logo">
                Foodie<span class="span">.</span>
              </a>

              <p class="footer-text">
                Financial experts support or help you to to find out which way
                you can raise your funds more.
              </p>

              <ul class="social-list">
                <SocialList></SocialList>
              </ul>
            </div>

            <ul class="footer-list">
              <FooterList
                contactList={true}
                title={"Contact Info"}
                itemOne={"+1 (062) 109-9222"}
                itemTwo={"Info@YourGmail24.com"}
                itemThree={"153 Williamson Plaza, Maggieberg, MT 09514"}
              ></FooterList>
            </ul>

            <ul class="footer-list">
              <FooterList
                contactList={false}
                title={"Opening Hours"}
                itemOne={"Monday-Friday: 08:00-22:00"}
                itemTwo={"Tuesday 4PM: Till Mid Night"}
                itemThree={"Saturday: 10:00-16:00"}
              ></FooterList>
            </ul>
            <Form></Form>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright-text">
              &copy; 2023{" "}
              <a
                href="https://github.com/ArifAmeer001"
                target="_blank"
                class="copyright-link"
              >
                codewithArif
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
