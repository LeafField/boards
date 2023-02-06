import "../styles/style.scss";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faTwitter, faFacebookF, faInstagram);
dom.watch();
