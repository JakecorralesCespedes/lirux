import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Radio Lira 88.7 FM</h3>
          <p>Transmitiendo fe y esperanza</p>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/radiolira" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/radiolira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@radiolira887fm" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Tel: +(506) 8970 3010</p>
          <p>Email: info@radiolira.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Radio Lira 88.7 FM. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer; 