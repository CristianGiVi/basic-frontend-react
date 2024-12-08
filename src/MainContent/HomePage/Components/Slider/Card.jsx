export const Card = ({ Product }) => {
    const {name, price, image} = Product;
    return (
        <div className="card" style={
            {
                marginRight: "2px",
                border: "0px solid #ddd"
            } 
            
        }>
            <img
                src={image}
                alt={name}
                height="750px"
                width="100%"
                loading="lazy"
            />
            <p>COMMON AREA</p>
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

