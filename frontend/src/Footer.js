import useWindowSize from "./hooks/useWindowSize";

const Footer = () => {
  const today = new Date();
  const { width } = useWindowSize();

  return (
    <footer
      style={{
        backgroundColor: "white",
        fontSize: "12px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          display: width > 500 ? "flex" : "",
          flex: 1,
          justifyContent: "space-between",
          padding: "10px",
          fontFamily: "Arial",
        }}
      >
        <div>
          <p style={{ textDecoration: "underline" }}>Contact Us</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah</p>
        </div>
        <div>
          <p style={{ textDecoration: "underline" }}>Find Us Here</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
        </div>
        <div>
          <p style={{ textDecoration: "underline" }}>About Us</p>
          <p style={{ color: "grey" }}>Blah Blah </p>
          <p style={{ color: "grey" }}>Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
        </div>
        <div>
          <p style={{ textDecoration: "underline" }}>More Stuff</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah</p>
        </div>
        <div>
          <p style={{ textDecoration: "underline" }}>Other Stuff</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah</p>
          <p style={{ color: "grey" }}>Blah Blah Blah</p>
        </div>
      </div>
      <div>
        <p
          style={{
            color: "black",
            textAlign: "center",
            fontFamily: "Arial",
          }}
        >
          &copy; {today.getFullYear()} Golf Mullet, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
