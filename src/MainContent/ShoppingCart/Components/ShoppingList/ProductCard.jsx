export const ProductCard = ({ Product }) => {
    const {image, name, price} = Product;
    return (
        <div className="d-flex m-2" style={{borderBottom: "1px solid gray", paddingBottom: "20px"}}>
            <img 
                src={image} 
                alt={name} 
                className="img-fluid" 
                style={{ width: "20%", height: "auto", marginRight: "15px" }} 
            />

            <div>
                <ul style={{listStyle: "none"}}>
                    <li><p>COMMON AREA</p></li>
                    <li><p>{name}</p></li>
                    <li><p>${price}</p></li>
                    <li><p>Talla: XS</p></li>
                </ul>
            </div>
        </div>
    );
};