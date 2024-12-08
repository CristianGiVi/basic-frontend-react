import { useEffect, useState } from 'react';

export const ShoppingResume = ({ Products }) => {

    const [bill, setBill] = useState(0);
    const [codeDiscount, setCodeDiscount] = useState("");
    const [haveCodeDiscount, setHaveCodeDiscount] = useState(false);

    useEffect(() => {
        generateBill();
    }, [Products]);

    function generateBill() {
        let acum = 0;
        for (let p of Products) {
            acum += parseInt(p.price, 10);
        }
        setBill(acum);
    }

    const handleCouponApply = () => {
        if (codeDiscount) {
            setHaveCodeDiscount(true);
        }
    };

    const handleCouponDelete = () => {
        setHaveCodeDiscount(false);
        setCodeDiscount("");
    };


    return (
        <div className="card" style={{
            backgroundColor: "#F6F6F6",
            border: "0px solid black",
            color: "#5d5d5d"
        }}>
            <div className='m-4'>
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <p style={{ fontSize: "30px" }}>RESUMEN DE COMPRA</p>
                </div>
                <div className="text-center" style={{
                    marginBottom: "50px"
                }}>
                    <input className="coupon-code" id="coupon-code" placeholder="Codigo de descuento"
                        value={codeDiscount} onChange={(e) => setCodeDiscount(e.target.value)} />
                    <button className="btn-coupon" id="btn-coupon" onClick={handleCouponApply}>Aplicar</button>
                </div>

                <div>
                    {haveCodeDiscount && (
                        <div className="text-center">
                            <p>Tu codigo se ha aplicado con exito. El precio Total con descuento se mostrara
                                en el checkout
                            </p>

                            <div className='d-flex align-items-center'>
                                <p style={{color:"black", backgroundColor: "#6f6f6f", padding:"10px"}}>{codeDiscount}</p>
                                <button type="button" class="btn-close" aria-label="Close" onClick={handleCouponDelete} 
                                style={{marginBottom: "15px"}}></button>
                            </div>

                        </div>
                    )}
                </div>

                <div className="position-relative" >
                    <div className="position-absolute top-0 start-0"><p>Total estimado</p></div>
                    <div className="position-absolute top-0 end-0"><p>$ {bill}</p></div>
                </div>

                <div className="row d-flex justify-content-center align-items-center text-center"
                    style={{
                        marginTop: "100px",
                        marginBottom: "20px"
                    }}
                >
                    <button type="button" className="btn btn-dark"
                        style={{ borderRadius: "0px" }}>Pagar pedido</button>
                </div>


                <div className="row d-flex justify-content-center align-items-center text-center">
                    <p>Impuesto incluido. Envío y descuentos calculados en la pantalla de pago.</p>
                </div>

                <div>
                    <details>
                        <summary>
                            <p>¿Necesitas ayuda?</p>
                        </summary>
                        <p>
                            Contacta a nuestro equipo de soporte a través de WhatsApp, o escríbenos al correo electrónico info@malvaonline.com
                        </p>
                    </details>
                    <hr />
                </div>

                <div>
                    <details>
                        <summary>
                            <p>Metodos de pago</p>
                        </summary>
                        <p>
                            Aceptamos una variedad de métodos de pago seguros, incluyendo tarjetas de crédito y débito, transferencias
                            bancarias, y plataformas digitales. Todos los pagos están protegidos con tecnología de encriptación para
                            garantizar la seguridad de tus transacciones.
                        </p>
                    </details>
                    <hr />
                </div>

                <div>
                    <details>
                        <summary>
                            <p>Envios y Devoluciones</p>
                        </summary>
                        <p>Entrega gratis y rápida:</p>
                        <p>¡No esperes más! Recibe tu pedido en 2-5 días hábiles y empieza a disfrutar de tu compra.</p>
                        <p>Seguimiento en tiempo real:</p>
                        <p>La tranquilidad de saber dónde está tu paquete en todo momento.</p>
                        <p>Devoluciones sencillas y sin costo:</p>
                        <p>¿Tu compra online no fue lo que esperabas? ¡Tienes 30 días después de la entrega para devolverla!</p>
                        <p>Reembolso rápido:</p>
                        <p>Tu dinero de vuelta en un máximo de 30 días hábiles luego de realizar tu solicitud. ¡Así de fácil!</p>
                    </details>
                    <hr />
                </div>

            </div>
        </div>
    )
}
