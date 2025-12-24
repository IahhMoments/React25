import logo from "../assets/investmentLogo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo showing money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
