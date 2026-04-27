import './App.css'
import computerImg from './assets/computer.png'
import HeaderClient from './components/HeaderClient'


function App() {
  return(
    <>
    <HeaderClient/>
    <main>
      <section id="product-details-section" class="dsc-container">
        <div class="dsc-card dsc-mb20">
          <div class="dsc-product-details-top dsc-line-bottom">
            <img src={computerImg} alt="Computador" />
          </div>
          <div class="dsc-product-details-bottom">
            <h3>R$ 5000,00</h3>
            <h4>Computador Gamer XT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div class="dsc-category-container">
                <div class="dsc-category">
                    Eletrônicos
                </div>
                <div class="dsc-category">
                    Computadores
                </div>
            </div>
          </div>
        </div>
        <div class="dsc-btn-page-container">
            <div class="dsc-btn dsc-btn-blue">
                Comprar
            </div>
            <div class="dsc-btn dsc-btn-white">
                Início
            </div>
        </div>
      </section>
    </main>
    </>
  );  
}

export default App
