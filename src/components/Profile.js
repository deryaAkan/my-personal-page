import "../App.css";
import profileImg from "../assests/Alternative-1/image 2.svg";

export default function Profile() {
  return (
    <main className="Profile flex-col">
      <h2 className="text-[48px] text-[#CBF281] font-bold justify-start w-3/5">Profile</h2>
      <div className="w-3/5">
      <div className="flex">
        <div className="flex flex-col gap-8 pt-14 pb-14">
          <p className="text-[30px] font-normal">Basic Information</p>
          <p className="text-[16px]"> <span className="text-[#CBF281] font-semibold">Doğum tarihi</span> 4.03.1996</p>
          <p className="text-[16px]"> <span className="text-[#CBF281] font-semibold">İkamet Şehri</span> Ankara</p>
          <p className=" text-[16px]"> <span className="text-[#CBF281] font-semibold">Eğitim Durumu</span> Hacettepe Ünv. Biyoloji Lisans, 2016</p>
          <p className="text-[16px]"> <span className="text-[#CBF281] font-semibold ">Tercih Ettiği Rol</span> Frontend, UI</p>
        </div>
        <img src={profileImg}></img>
        <div className="flex flex-col gap-8 pt-14 pb-14">
        <p className="text-[30px] font-normal">About Me</p>
          <p className="text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
          <p className="text-[16px]"> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam</p>
        </div>
      </div>
      </div>
    </main>
  );
}
