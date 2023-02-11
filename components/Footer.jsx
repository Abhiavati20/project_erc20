import styles from "../styles/Footer.module.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { DiYeoman } from "react-icons/di";

export default function Footer() {
  const handleClick = (e) => {
    const link = e.target.getAttribute("name");

    if (link === "linkedin")
      window.open(
        "https://www.linkedin.com/in/abhishekavati/",
        "_blank"
      );
    if (link === "portfolio")
      window.open("https://abhishek-two.vercel.app/", "_blank");
    if (link === "github")
      window.open("https://github.com/Abhiavati20", "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>Project-ERC20</h1>
      </div>
      <ul className={styles.links}>
        <li onClick={handleClick} name="linkedin">
          <FaLinkedinIn className={styles.icons} />
        </li>
        <li onClick={handleClick} name="github">
          <FaGithub className={styles.icons} />
        </li>
        <li onClick={handleClick} name="portfolio">
          <DiYeoman className={styles.icons} />
        </li>
      </ul>
    </div>
  );
}