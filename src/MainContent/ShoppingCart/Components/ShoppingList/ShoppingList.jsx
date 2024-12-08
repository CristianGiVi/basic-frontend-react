import { ProductCard } from "./ProductCard";

export const ShoppingList = ({ Products }) => {
  return (
    <div className="container">
        <div className="list-group">
            {Products.map((product) => (
                <ProductCard key={product.sku} Product={product} />
                
            ))}
            
        </div>
    </div>
);
}
