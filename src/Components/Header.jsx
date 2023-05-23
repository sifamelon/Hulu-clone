import Headericon from "./Headericon";
import { AiOutlineHome } from "react-icons/ai";
import { BsLightningCharge, BsCollection, BsSearch } from "react-icons/bs";
import { BiBadgeCheck } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
      <div className=" flex flex-grow justify-evenly max-w-2xl mt-3 ">
        <Headericon title={"Home"} Icon={<AiOutlineHome />} />
        <Headericon title={"Trending"} Icon={<BsLightningCharge />} />
        <Headericon title={"Verified"} Icon={<BiBadgeCheck />} />
        <Headericon title={"Collections"} Icon={<BsCollection />} />
        <Headericon title={"Search"} Icon={<BsSearch />} />
        <Headericon title={"Account"} Icon={<MdOutlineAccountCircle />} />
      </div>
      <img
        className="object-contain"
        width={150}
        height={100}
        src="https://www.logo.wine/a/logo/Hulu/Hulu-Logo.wine.svg"
        alt=""
      />
    </header>
  );
};

export default Header;
