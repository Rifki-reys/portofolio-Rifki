<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>

<?= view('sections/hero') ?>

<?= view('sections/about') ?>

<?= view('sections/skills') ?>

<?= view('sections/projects') ?>

<section class="hero">

    <div class="container">

        <div class="row align-items-center min-vh-100">

            <div class="col-lg-6" data-aos="fade-right">

                <h5 class="text-primary fw-bold">
                    Halo, Saya 👋
                </h5>

                <h1 class="display-3 fw-bold">
                    Rifki Fauzi
                </h1>

                <h3 <span id="typing"></span>
                </h3>

                <p class="mt-4 text-secondary">

                    Saya adalah mahasiswa Sistem Informasi yang memiliki
                    ketertarikan pada Web Development,
                    Database, dan UI/UX Design.

                </p>

                <div class="mt-4">

                    <a href="#" class="btn btn-primary btn-lg me-3">
                        Download CV
                    </a>

                    <a href="#project" class="btn btn-outline-primary btn-lg">
                        Lihat Project
                    </a>

                </div>

            </div>
                  <div class="social-icons mt-5">

    <a href="#" title="GitHub">
        <i class="fab fa-github"></i>
    </a>

    <a href="#" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>

    <a href="#" title="Instagram">
        <i class="fab fa-instagram"></i>
    </a>

    <a href="mailto:email@example.com" title="Email">
        <i class="fas fa-envelope"></i>
    </a>

</div>

            <div class="col-lg-6 text-center" data-aos="fade-left">

                <img src="<?= base_url('images/profile/profile.png') ?>"
                    class="img-fluid hero-image"
                    alt="Foto Profil">

            </div>

        </div>

    </div>

</section>

<?= $this->endSection() ?>