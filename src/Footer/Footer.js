import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <h1 className="centeredTextAlign">
        &copy; {currentYear} Developer V.P
      </h1>
    </div>
  );
}
