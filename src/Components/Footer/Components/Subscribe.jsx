import React from 'react';

export const Subscribe = () => {
  return (
    <div className="col-5">
      <p className="text">Suscríbete a nuestro Newsletter</p>
      <p>
        Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año.
      </p>

      <div>
        <input type="radio" id="female" name="preferences" data-gtm-form-interact-field-id="0" />
        <label htmlFor="female" style={{ marginRight: "10px", marginLeft: "10px" }}>
          Mujer
        </label>

        <input type="radio" id="male" name="preferences" data-gtm-form-interact-field-id="1" />
        <label htmlFor="male" style={{ marginRight: "10px", marginLeft: "10px" }}>
          Hombre
        </label>

        <input type="radio" id="kids" name="preferences" data-gtm-form-interact-field-id="2" />
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
        />
      </div>

      <div class="form-group form-check" style={{ marginBottom: "10px" }}>
        <input type="checkbox" class="form-check-input" id="personalData" />
        <label class="form-check-label" for="personalData">Autorizo el tratamiento de datos personales</label>
      </div>
    </div>
  );
};
