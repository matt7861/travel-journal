import earth from "../src/assets/earth.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={earth} alt="earth" />
      <h1>my travel journal.</h1>
    </header>
  );
}
