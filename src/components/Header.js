import "../App.css";
import headerImg from '../assests/Alternative-1/foto.png';


export default function Header() {
  return (
    <header className="Header CommonThings">
      <div className="w-3/5 flex">
        <div className="flex-col">
          <h1 className="text-[#CBF281] text-[54px] font-bold">I am a Frontend Developer...</h1>
          <p className="text-[24px] font-normal">...who likes to craft solid and scalable frontend products with great user experiences.</p>
          <button className="rounded-xl bg-[#CBF281] text-[#4731D3]">Github</button>
          <button className="rounded-xl bg-[#CBF281] text-[#4731D3]">LinkedIn</button>
        </div>
        <img src={headerImg} className="w-1/3" />
      </div>
    </header>
  );
}

