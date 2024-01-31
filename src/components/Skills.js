import "../App.css";
import jsLogo from "../assests/Alternative-1/Skills-icons/js-logo 1.png";
import nodeLogo from "../assests/Alternative-1/Skills-icons/node-logo 1.png";
import reactLogo from "../assests/Alternative-1/Skills-icons/Rectangle 35.png";
import vscodeLogo from "../assests/Alternative-1/Skills-icons/Group 101-1.png";
import figmaLogo from "../assests/Alternative-1/Skills-icons/figma-logo 1.png";
import reduxLogo from "../assests/Alternative-1/Skills-icons/Group 101.png";

export default function Skills() {
  return (
    <section className="Skills">
      <div className="w-3/5 flex gap-40">
        <div className="text-[#4832D3] text-[48px] font-bold">Skills</div>
        <div className="flex flex-wrap gap-10 justify-between">
        <div className="flex gap-5"><img src={jsLogo}/> <p>JAVASCRIPT</p></div>
        <div className="flex gap-5"><img src={nodeLogo} /> <p>NODE</p></div>
        <div className="flex gap-5"><img src={reactLogo} /> <p>REACT</p> </div>
        <div className="flex gap-5"><img src={vscodeLogo} /> <p>VS CODE</p></div>
        <div className="flex gap-5"><img src={reduxLogo} /> <p>REDUX</p></div>
        <div className="flex gap-5"><img src={figmaLogo} /> <p>FIGMA</p></div>
        </div>
      </div>
    </section>
  );
}
