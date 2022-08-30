const Footer = () => {
  // Javascript up here to create a date and store the year.
  const currentYear = new Date().getFullYear();

  return (
    <>
      <h6>Copyright {currentYear}</h6>
    </>
  );
};

export default Footer;
