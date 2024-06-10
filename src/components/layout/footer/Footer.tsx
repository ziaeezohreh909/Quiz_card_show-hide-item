import insta from "../../../assets/instagram.svg";
import telegram from "../../../assets/telegram.svg";
import twiiter from "../../../assets/twiiter.jpg";
export default function Footer() {
  return (
    <footer className="bg-gray-600 h-[200px] text-white font-bold p-5 w-full">
      <ul className="text-center p-3 text-l">
        <li className="m-2">Contact : +31 61345856</li>
        <li>Address : 5616EV-Limbrgulan 173-Eindhoven-Netherland</li>
      </ul>
      <ul className="container mx:auto flex flex-wrap gap-2 justify-center p-6 mx-14">
        <li>
          <img src={insta} alt="insta" />
        </li>
        <li>
          <img src={telegram} alt="telegram" />
        </li>
        <li>
          <img src={twiiter} alt="twiiter" className="w-5 h-5 rounded-full" />
        </li>
        <li>about us</li>
      </ul>
    </footer>
  );
}
