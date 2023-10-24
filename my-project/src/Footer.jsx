function Footer() {
  return (
    <footer>
      <hr />
      {/*To use JS the code must be encapsulated by {}*/}
      <h1>&copy; {new Date().getFullYear()}TheWebSite</h1>
    </footer>
  );
}

export default Footer;
