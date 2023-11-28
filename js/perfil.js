import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '..\\css\\perfil.css';
document.querySelector('#app').innerHTML = `
<main>
<div class="contenedor">
    <section class="tarjeta">
        <section class="slider_banner">
            <div class="banner">
                <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1701101231/team-profile/hqayflccq0a8ql4bezfc.jpg"
                    alt="" class="slide active">
                <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1701101231/team-profile/bftljsppzv0dkldzpn60.jpg"
                    alt="" class="slide">
                <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1701101231/team-profile/sb7qawfkiw3njt0ptboq.jpg"
                    alt="" class="slide">
            </div>
            <a href="#" id="banner-prev" class="fecha-banner anterior"><span><i
                        class="fa fa-chevron-left"></i></span></a>
            <a href="#" id="banner-next" class="fecha-banner siguiente"><span><i
                        class="fa fa-chevron-right"></i></span></a>
        </section>
        <section class="slider_info">
            <a href="#" id="info-prev" class="fecha-info anterior"><span><i
                        class="fa fa-chevron-left"></i></span></a>
            <a href="#" id="info-next" class="fecha-info siguiente"><span><i
                        class="fa fa-chevron-right"></i></span></a>
            <section class="informacion" id="informacion">
                <article id="info">
                    <div class="slide active">
                        <h1 class="nombre">Roberto Alferes</h1>
                        <p class="trabajo">
                            Web Developer
                        </p>
                        <p class="pais"><img
                                src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1701103534/team-profile/e59alioil5kf3q2aowqc.png"
                                alt="">El Salvador</p>
                    </div>
                    <div class="slide">
                        <h2 class="subtitulo">Profesion</h2>
                        <p class="texto">descripcion</p>
                    </div>
                    <div class="slide">
                        <h2 class="subtitulo">Experiencia</h2>
                        <p class="texto">descripcion</p>
                    </div>
                </article>
                <div class="botones" id="botones">

                </div>
            </section>
        </section>
        <section class="redes-sociales">
            <a href="#" class="github"><span><i class="fa-brands fa-github"></i></span></a>
            <a href="#" class="linkedin"><span><i class="fa-brands fa-linkedin"></i></span></a>
        </section>
    </section>
</div>
</main>
`;