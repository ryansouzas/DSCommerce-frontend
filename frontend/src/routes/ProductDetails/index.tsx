import './styles.css'

import HeaderClient from '../../components/HeaderClient'
import ButtonPrimary from '../../components/ButtonPrimary'
import ButtonInverse from '../../components/ButtonInverse'
import ProductDetailsCard from '../../components/ProductDetailsCard'


export default function ProductDetails(){
    return(
    <>
    <HeaderClient/>
    <main>
      <section id="product-details-section" class="dsc-container">
        <ProductDetailsCard/>
        <div class="dsc-btn-page-container">
            <ButtonPrimary/>
            <ButtonInverse/>
        </div>
      </section>
    </main>
    </>
    );
}