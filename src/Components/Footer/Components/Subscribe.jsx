import { useState } from "react";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
  };

  return (
    <form onSubmit={handleSubmit} className="col-5">
      <p>Suscríbete a nuestro Newsletter</p>
      <p>
        Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año.
      </p>

      <div>
        <input
          type="radio"
          id="female"
          name="preferences"
          value="female"
          checked={gender == "female"}
          onChange={(e) => setGender(e.target.value)}
          data-gtm-form-interact-field-id="0"
        />
        <label htmlFor="female" style={{ marginRight: "10px", marginLeft: "10px" }}>
          Mujer
        </label>

        <input
          type="radio"
          id="male"
          name="preferences"
          value="male"
          checked={gender == "male"}
          onChange={(e) => setGender(e.target.value)}
          data-gtm-form-interact-field-id="1"
        />
        <label htmlFor="male" style={{ marginRight: "10px", marginLeft: "10px" }}>
          Hombre
        </label>

        <input
          type="radio"
          id="kids"
          name="preferences"
          value="kids"
          checked={gender == "kids"}
          onChange={(e) => setGender(e.target.value)}
          data-gtm-form-interact-field-id="2"
        />
        <label htmlFor="kids" style={{ marginRight: "10px", marginLeft: "10px" }}>
          Niños
        </label>
      </div>

      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <input
          type="email"
          id="ContactFooter-email"
          placeholder="Correo electrónico"
          required
          name="personalData"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-coupon" id="btn-coupon">
          Suscribirme
        </button>
      </div>

      <div className="form-group form-check" style={{ marginBottom: "10px" }}>
        <input
          type="checkbox"
          className="form-check-input"
          id="personalData"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label className="form-check-label" htmlFor="personalData">
          Autorizo el tratamiento de datos personales
        </label>
      </div>
    </form>
  );
};
