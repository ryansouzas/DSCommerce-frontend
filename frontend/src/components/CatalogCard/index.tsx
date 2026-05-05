import './styles.css'
import computerImg from '../../assets/computer.png'
import type { ProductDto } from '../../models/product';

type Props = {
  product: ProductDto
}

export default function CatalogCard({ product }: Props) {
  return (
    <div className="dsc-card">
      <div className="dsc-catalog-card-top dsc-line-bottom">
        <img src={computerImg} alt={product.name} />
      </div>
      <div className="dsc-catalog-card-bottom">
        <h3>{product.price.toFixed(2)}</h3>
        <h4>
          {product.name}
        </h4>
      </div>
    </div>
  );
}