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
                    <i class="fa-regular fa-face-smile" aria-hidden="true"></i> Hello, I'm
                </h5>

                <h1 class="display-3 fw-bold">
                    Rifki Fauzi
                </h1>

                <h3><span id="typing"></span>
                </h3>

                <p class="mt-4 text-secondary">

                    I am an Information Systems student focused on learning
                    Web Development, Database management,
                    and UI/UX Design.

                </p>

                <div class="mt-4">

                    <a href="<?= base_url('uploads/cv/CV-Rifki-Fauzi.pdf') ?>" class="btn btn-primary btn-lg me-3" target="_blank" download="CV-Rifki-Fauzi.pdf">
                        Download CV
                    </a>

                    <a href="#projects" class="btn btn-outline-primary btn-lg">
                        View Projects
                    </a>

                </div>

            </div>
                  <div class="social-icons mt-5">

    <a href="https://github.com/Rifki-reys" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i class="fab fa-github"></i>
    </a>

    <a href="https://www.instagram.com/rfkifauzi_?stkn=MWhjenRmbW8zemZhNw==" target="_blank" rel="noopener noreferrer" title="Instagram">
        <i class="fab fa-instagram"></i>
    </a>

    <a href="mailto:rifkifauzi325@gmail.com" title="Email">
        <i class="fas fa-envelope"></i>
    </a>

</div>

            <div class="col-lg-6 text-center" data-aos="fade-left">

                <img src="<?= base_url('images/profile/profile.png') ?>"
                    class="img-fluid hero-image"
                    alt="Profile Photo">

            </div>

        </div>

    </div>

</section>

<?= $this->endSection() ?>