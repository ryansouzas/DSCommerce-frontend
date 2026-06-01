import "./styles.css";

import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

export default function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {

    productService.findById(Number(params.productId)).then((response) => {
      setProduct(response.data);
    });

  }, [params.productId]);

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <Link to="/">
            <ButtonInverse text="Início" />
          </Link>
        </div>
      </section>
    </main>
  );
}
