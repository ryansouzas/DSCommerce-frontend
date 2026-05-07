import "./styles.css";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import type { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Pc",
  description: "Pc",
  imgUrl: "",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletronicos",
    },
    {
      id: 4,
      name: "Pc",
    },
    {
      id: 3,
      name: "Smart",
    },
  ],
};

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={product} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Início" />
        </div>
      </section>
    </main>
  );
}
