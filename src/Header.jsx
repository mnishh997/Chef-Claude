import chefLogo from "./assets/chef-claude-icon.png";
import "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={chefLogo} alt="Chef Logo" />
      <h1>Chef Claude</h1>
    </header>
  );
}
