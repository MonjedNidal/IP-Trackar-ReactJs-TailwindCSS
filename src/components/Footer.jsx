function Footer() {
  return (
    <div className="absolute z-50 flex flex-wrap justify-center content-center bottom-0 w-screen text-center bg-white h-10">
      <p className="text-VeryDarkGray font-medium">
        Challenge by{" "}
        <a
          className="text-blue"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-blue" href="https://github.com/MonjedNidal">
          MonjedNidal
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
