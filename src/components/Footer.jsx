import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css"

function Footer(){
    return(
        <footer className="footer" id="contato">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>Churrascaria Brasa Nobre</h3>
                    <p>
                        Tradição em carnes nobres, preparadas na brasa
                        com qualidade,
                        sabor e atendimento de excelência.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Contato</h4>
                    <ul>
                        <li>São Paulo - SP</li>
                        <li>📞 (11) 99999-9999</li>
                        <li>⏰ Seg a Dom: 11h às 23h</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Redes Sociais</h4>
                    <div className="footer-social">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="#" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    {new Date().getFullYear()} Churrascaria Brasa
                    Nobre -
                        Projeto desenvolvido para portfólio
                </p>
            </div>
        </footer>
    )
}

export default Footer;