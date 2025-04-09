export const crearTemplateHtml = (email, asunto, token, username) => {
    let template;

    if (asunto === "registro") {
        template = `
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f7f7f7;
                  margin: 0;
                  padding: 0;
                }
                .email-container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                  text-align: center;
                  margin-bottom: 20px;
                }
                .header h1 {
                  color: #4A90E2;
                }
                .content {
                  font-size: 16px;
                  color: #333333;
                  line-height: 1.5;
                  margin-bottom: 20px;
                }
                .boton {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 100%;
                }
                .button {
                  display: inline-block;
                  background-color: #4A90E2;
                  color: #ffffff;
                  font-size: 16px;
                  font-weight: bold;
                  padding: 12px 20px;
                  text-decoration: none;
                  border-radius: 5px;
                  margin: 20px 0;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  color: #888888;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="header">
                  <h1>Bienvenido a Refugio de Animales React</h1>
                </div>
                <div class="content">
                  <p>¡Hola! <strong>${username}</strong></p>
                  <p>Gracias por registrarte en <strong>Refugio de Animales React</strong>. Para completar tu registro y comenzar a explorar adopciones, haz clic en el siguiente botón:</p>
                  <div class="boton">
                    <a href="http://localhost:5173/validar-cuenta/?email=${email}&token=${token}" class="button">Validar Cuenta</a>
                  </div>
                  <p>Si no realizaste este registro, puedes ignorar este correo.</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 Refugio de Animales React | Todos los derechos reservados</p>
                  <p>¿Tienes dudas? Escríbenos a <a href="mailto:contacto@refugioanimalesreact.cl">contacto@refugioanimalesreact.cl</a>.</p>
                </div>
              </div>
            </body>
          </html>
        `;
    } else if (asunto === "recuperarPassword") {
        template = `
          <html>
            <head>
              <!-- estilos iguales al anterior -->
            </head>
            <body>
              <div class="email-container">
                <div class="header">
                  <h1>¿Olvidaste tu contraseña?</h1>
                </div>
                <div class="content">
                  <p>¡Hola! <strong>${username}</strong></p>
                  <p>Hemos recibido una solicitud para recuperar tu contraseña en Refugio de Animales React. Haz clic en el botón para restablecerla:</p>
                  <div class="boton">
                    <a href="http://localhost:5173/modificar-password/?email=${email}&token=${token}" class="button">Cambiar Contraseña</a>
                  </div>
                  <p>Si no hiciste esta solicitud, ignora este correo.</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 Refugio de Animales React | Todos los derechos reservados</p>
                  <p>¿Tienes dudas? Escríbenos a <a href="mailto:contacto@refugioanimalesreact.cl">contacto@refugioanimalesreact.cl</a>.</p>
                </div>
              </div>
            </body>
          </html>
        `;
    } else if (asunto === "nuevaValidacion") {
        template = `
          <html>
            <head>
              <!-- estilos iguales al anterior -->
            </head>
            <body>
              <div class="email-container">
                <div class="header">
                  <h1>Valida tu cuenta en Refugio de Animales React</h1>
                </div>
                <div class="content">
                  <p>¡Hola! <strong>${username}</strong></p>
                  <p>Haz clic en el siguiente botón para validar tu cuenta y continuar:</p>
                  <div class="boton">
                    <a href="http://localhost:5173/validar-cuenta/?email=${email}&token=${token}" class="button">Validar Cuenta</a>
                  </div>
                  <p>Si no solicitaste esta validación, puedes ignorar este mensaje.</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 Refugio de Animales React | Todos los derechos reservados</p>
                  <p>¿Tienes dudas? Escríbenos a <a href="mailto:contacto@refugioanimalesreact.cl">contacto@refugioanimalesreact.cl</a>.</p>
                </div>
              </div>
            </body>
          </html>
        `;
    } else {
        template = `
    <html>
      <head>
        <!-- mismos estilos del anterior con ajustes visuales -->
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Contraseña actualizada</h1>
          </div>
          <div class="content">
            <p>¡Hola! <strong>${username}</strong></p>
            <p>Tu contraseña fue modificada exitosamente en Refugio de Animales React. Si no realizaste este cambio, por favor contáctanos inmediatamente.</p>
          </div>
          <div class="button-container">
            <a href="http://localhost:5173/login" class="button">Iniciar Sesión</a>
          </div>
          <div class="footer">
            <p>&copy; 2025 Refugio de Animales React | Todos los derechos reservados</p>
            <p>¿Tienes dudas? Escríbenos a <a href="mailto:contacto@refugioanimalesreact.cl">contacto@refugioanimalesreact.cl</a>.</p>
          </div>
        </div>
      </body>
    </html>
  `;
    }

    return template;
};
