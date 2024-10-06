import "./Footer.scss";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <address>Ogilvy © 2024</address>
        <a
          href="https://github.com/Celiaaviles/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="../../../github-icon.png" alt="GitHub Social Icon" />
        </a>
      </footer>
    </>
  );
}
