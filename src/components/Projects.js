import "../App.css";
import projectsIMG1 from "../assests/Alternative-1/Rectangle 41-1.svg";
import projectsIMG2 from "../assests/Alternative-1/Rectangle 41.svg";

export default function Projects() {
  return (
    <section className="Projects flex-col">
      <h2 className="text-[48px] text-[#4731D3] font-bold justify-start w-3/5">
        Projects
      </h2>
     
        <div className="w-3/5 bg-[#fff] rounded-xl flex">
          <img src={projectsIMG2} />
          <div className="flex-col">
            <h3 className="font-bold text-[32px] text-[#4731D3]">Workintech</h3>
            <p className="text-[16px] text-[#383838]">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
            <div className="flex">
                <button className="rounded-xl bg-[#4731D3]">Button</button>
                <button className="rounded-xl bg-[#4731D3]">Button</button>
                <button className="rounded-xl bg-[#4731D3]">Button</button>
            </div>
            <div className="flex">
                <a className="text-[#383838]">vercel</a>
                <a className="text-[#383838]">visit website</a>
            </div>
          </div>
        </div>
        <div className="w-3/5 bg-[#fff] rounded-xl flex">
          <img src={projectsIMG1} />
          <div className="flex-col">
            <h3 className="font-bold text-[32px] text-[#4731D3]">Journey</h3>
            <p className="text-[16px] text-[#383838]">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
            <div className="flex">
            <button className="rounded-xl bg-[#4731D3]">Button</button>
                <button className="rounded-xl bg-[#4731D3]">Button</button>
                <button className="rounded-xl bg-[#4731D3]">Button</button>
            </div>
            <div className="flex">
                <a className="text-[#383838]">vercel</a>
                <a className="text-[#383838]">visit website</a>
            </div>
          </div>
        </div>
    
    </section>
  );
}
