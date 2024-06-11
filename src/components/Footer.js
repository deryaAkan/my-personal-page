import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export default function Footer({ data, theme }) {
  const icons = [
    { icon: faTwitter, className: "text-[#591C47] dark:text-[#8F88FF] " },
    { icon: faCodepen, className: "text-[#591C47] dark:text-[#8F88FF] " },
    { icon: faAt, className: "text-[#591C47] dark:text-[#8F88FF] " },
    { icon: faInstagram, className: "text-[#591C47] dark:text-[#8F88FF] " },
  ];

  return (
    <footer
      className={classNames("CommonThings", " bg-white", "text-[#777777]", {
        "light-gradient": theme === "light",
        "dark-gradient": theme === "dark",
      })}
    >
      <div className="w-1/2 flex flex-col justify-center items-center gap-5 sm:w-full">
        <h3 className="font-bold text-[#591C47] text-[48px] dark:text-[#8F88FF]">
          {data.heading}
        </h3>

        <p className="flex flex-wrap justify-center font-normal text-[24px] dark:text-white ">
          {data.description}
        </p>

        <a
          href="https://www.google.com/"
          className="text-[20px] text-[#591C47] underline dark:text-[#8F88FF]"
        >
          almilasucode@gmail.com
        </a>
        <div className="flex flex-wrap gap-5">
          {icons.map((iconObject, index) => (
            <FontAwesomeIcon
              key={index}
              icon={iconObject.icon}
              className={iconObject.className}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
