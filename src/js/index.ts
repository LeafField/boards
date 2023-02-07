import "../styles/style.scss";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faTwitter, faFacebookF, faInstagram, faX);
dom.watch();

const hamburger = document.querySelector(".navbtn") as HTMLButtonElement;
const html = document.querySelector("html") as HTMLElement;

hamburger.addEventListener("click", () => {
  html.classList.toggle("open");
});

window.addEventListener("resize", () => {
  html.classList.remove("open");
});
