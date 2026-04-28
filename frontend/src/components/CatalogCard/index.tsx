import './styles.css'
import computerImg from '../../assets/computer.png'

export default function CatalogCard(){
    return(
        <div class="dsc-card">
            <div class="dsc-catalog-card-top dsc-line-bottom">
              <img src={computerImg} alt="Computer" />
            </div>
            <div class="dsc-catalog-card-bottom">
              <h3>R$ 5000,00</h3>
              <h4>
                Computador Gamer XT
              </h4>
            </div>
        </div>
    );
}