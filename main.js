import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '.\\css\\style.css';
import '.\\css\\main.css';
document.querySelector('#app').innerHTML = `

<!--Inicio seccion formulario-->
<div class="container">
  <h1 class="text-center fw-bold">Registro de perfil profesional</h1>
  <form class="formulario" id="formulario">
    <!-- Grupo nombre -->
    <div class="formulario__grupo" id="grupo__nombre">
      <label for="nombre" class="formulario__label">Nombre Completo:</label>
      <div class="formulario__grupo-input">
        <input type="text" class="formulario__input" name="nombre" id="nombre"
          placeholder="Digita tu nombre completo">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">El nombre solo puede contener letras y espacios.</p>
      </div>
    </div>

    <!-- Grupo Telefono -->
    <div class="formulario__grupo" id="grupo__telefono">
      <label for="telefono" class="formulario__label">Teléfono:</label>
      <div class="formulario__grupo-input">
        <input type="tel" class="formulario__input" name="telefono" id="telefono" placeholder="12345678">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">El teléfono solo puede contener caracteres numericos y 8 digitos.</p>
      </div>
    </div>

    <!-- Grupo correo -->
    <div class="formulario__grupo" id="grupo__correo">
      <label for="correo" class="formulario__label">Correo Electronico:</label>
      <div class="formulario__grupo-input">
        <input type="email" class="formulario__input" name="correo" id="correo" placeholder="example@domain.com">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion
          bajo.</p>
      </div>
    </div>

    <!-- Grupo GitHub -->
    <div class="formulario__grupo" id="grupo__github">
      <label for="github" class="formulario__label">Usuario GitHub:</label>
      <div class="formulario__grupo-input">
        <input type="text" class="formulario__input" name="github" id="github" placeholder="Digite su usuario">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">El usuario no debe contener espacios, solo letras, numeros, guion y guion
          bajo</p>
      </div>
    </div>

    <!-- Grupo LinkedIn -->
    <div class="formulario__grupo" id="grupo__linkedin">
      <label for="linkedin" class="formulario__label">Usuario linkedin:</label>
      <div class="formulario__grupo-input">
        <input type="text" class="formulario__input" name="linkedin" id="linkedin" placeholder="Digite su usuario">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">El usuario no debe contener espacios, solo letras, numeros, guion y guion
          bajo</p>
      </div>
    </div>

    <!-- Grupo FotoPerfil -->
    <div class="formulario__grupo" id="grupo__profilepic">
      <label for="profilepic" class="formulario__label">Seleccione su foto de perfil:</label>
      <div class="formulario__grupo-input">
        <input type="url" class="formulario__input" name="profilepic" id="profilepic" placeholder="www.imagen.com">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">Solo se aceptan url.</p>
      </div>
    </div>

    <!-- Grupo FotoProyecto -->
    <div class="formulario__grupo" id="grupo__profileproject">
      <label for="profileproject" class="formulario__label">Seleccione su foto de proyecto:</label>
      <div class="formulario__grupo-input">
        <input type="url" class="formulario__input" name="profileproject" id="profileproject"
          placeholder="www.imagen.com">
        <i class="formulario__validacion-estado fa-solid fa-circle-xmark" style="color: #f01919;"></i>
        <p class="formulario__input-error">Solo se aceptan url.</p>
      </div>
    </div>

    <!-- Grupo Descripcion -->
    <div class="formulario__grupo" id="grupo__Descripcion">
      <label for="Descripcion" class="formulario__label">Profesión y experiencia:</label>
      <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos... (máximo 200 caracteres)" maxlength="200" rows="2" cols="70"></textarea>
    </div>

    <div class="formulario__mensaje" id="formulario__mensaje">
      <p><i class="fa-solid fa-triangle-exclamation" style="color: #f01919;"></i> <b>Error:</b> Porfavor rellene el
        formulario correctamente. </p>
    </div>

    <!--Boton de envio-->
    <div class="formulario__grupo formulario__grupo-btn-enviar">
      <button class="formulario__btn" id="formulario__btn">Guardar</button>
      <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
    </div>
  </form>
</div>
`;
