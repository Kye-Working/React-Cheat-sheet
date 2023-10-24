function Header() {
  return (
    <header>
      {/*Tailwind will remove all default css*/}
      <h1 className="bg-green-100 underline bold">Website</h1>
      <ul className="bg-yellow-200">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Intro</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <hr />
    </header>
  );
}

export default Header;
