document.addEventListener("DOMContentLoaded", () => {
  const footerRoot = document.getElementById("footer-root");
  if (!footerRoot) return;

  // Ajuste automático do caminho relativo para assets
  // Se estiver em /pages/..., precisa subir 1 nível para achar /utils/...
  const isInsidePages = window.location.pathname.includes("/pages/");
  const basePath = isInsidePages ? "../" : "";

  footerRoot.innerHTML = `
    <footer class="footer" id="footer">
      <div class="footer-container">

        <div class="footer-logo">
          <img src="${basePath}utils/img/logos/logo_site_branca_verde.png" alt="Logo Inclusão Digital">
        </div>

        <div class="footer-column">
          <h3>Institucional</h3>
          <ul>
            <li>
              <a href="https://www.google.com.br/maps/place/ETEPAC/@-8.0479222,-34.884073,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab190184a4d96b:0xf59ff269720746ef!8m2!3d-8.0479222!4d-34.8814981!16s%2Fg%2F11fqztwpwv?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                 target="_blank" rel="noopener">
                Onde nos encontrar
              </a>
            </li>
            <li>
              <a href="mailto:2025inclusaodigital@gmail.com?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20saber%20mais%20sobre..."
                 target="_blank" rel="noopener">
                Envie um e-mail
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Siga o Inclusão Digital:</h3>
          <div class="buttons-footer">
            <a href="https://www.instagram.com/compazdigital/" target="_blank" rel="noopener"
               class="btn-sociais" title="Instagram" aria-label="Instagram do Projeto (abre em nova janela)">
              <i class="bi bi-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/inclusaodigital" target="_blank" rel="noopener"
               class="btn-sociais" title="LinkedIn" aria-label="LinkedIn (abre em nova janela)">
              <i class="bi bi-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com/@compazdigital" target="_blank" rel="noopener"
               class="btn-sociais" title="YouTube" aria-label="YouTube do Projeto (abre em nova janela)">
              <i class="bi bi-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <p>Inclusão Digital 2025 &copy; Todos os direitos reservados</p>
      </div>
    </footer>
  `;
});