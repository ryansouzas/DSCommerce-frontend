import './styles.css'
import cartIcon from '../../assets/cart.svg'

export default function HeaderClient(){
    return(
    <header class="dsc-header-client">
      <nav class="dsc-container">
        <h1>DSCommerce</h1>
        <div class="dsc-navbar-right">
          <div class="dsc-menu-items-container">
            <div class="dsc-menu-item">
              <img src={cartIcon} alt="Carrinho de compras" />
            </div>
          </div>
          <a href="#">Entrar</a>
        </div>
      </nav>
    </header>
    );
}