import Image from "next/image";
import logo from "./UdonSwapLogo.png"
import navStyle from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={navStyle.divtoflexlogoconnectwallet}>
      <div className={navStyle.logoimg}>
        <Link href="/">
          <Image
            className={navStyle.smartlogportal}
            src={logo}
            alt="not found"
          />
        </Link>
      </div>

      <div className={navStyle.connectwalletbuttondiv}>
        <Link href="https://app.udonswap.org/#/swap" target="_blank">
          <button
            className={navStyle.button}
          >
            LAUNCH APP
          </button>
        </Link>
      </div>
    </div>
  );
}
