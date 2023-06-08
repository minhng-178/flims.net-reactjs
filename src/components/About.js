import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Container } from "@mui/material";

function About() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);
  }, []);

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <Container className="about">
      <div ref={ref} className={`flim ${inView ? "visible" : ""}`}>
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">explore</i>About Our Site
            </div>
            <div className="collapsible-body">
              <span>
                Our website is designed to provide you with a convenient and
                enjoyable experience for watching movies online. We offer a wide
                range of movies in various genres, including action, drama,
                romance, comedy, and more. Our site is updated regularly, so you
                can always find the latest movie releases here.
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">movie</i>How to Watch a Movie
            </div>
            <div className="collapsible-body">
              <span>
                To watch a movie on our site, simply search for the movie you
                want to watch or browse through our selection of movies. Once
                you have found the movie you want to watch, click on it to open
                the movie page. From there, you can choose to rent or buy the
                movie, or subscribe to our premium service for unlimited access
                to all of our movies.
              </span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">contact_support</i>Getting Help
            </div>
            <div className="collapsible-body">
              <span>
                If you are experiencing any issues with our site or need help
                with anything, please don't hesitate to contact our customer
                support team. You can reach us by phone, email, or live chat at
                any time, and we will do our best to assist you promptly.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default About;
