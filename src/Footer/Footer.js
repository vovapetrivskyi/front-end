import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <h1 class="centeredTextAlign">
        &copy; {currentYear} Developer Volodymyr Petrivskyi
      </h1>
    </div>
  );
}
