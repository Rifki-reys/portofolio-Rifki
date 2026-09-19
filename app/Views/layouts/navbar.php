<nav class="navbar navbar-expand-lg fixed-top custom-navbar navbar-dark" aria-label="Main navigation">
    <div class="container">
        <a class="navbar-brand fw-bold logo" href="<?= base_url('/') ?>">
            Rifki Fauzi
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ms-auto align-items-lg-center">
                <li class="nav-item">
                    <a class="nav-link active" href="<?= base_url('/') ?>">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= base_url('/#about') ?>">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= base_url('/#skills') ?>">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= base_url('/#projects') ?>">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="<?= base_url('/#contact') ?>">Contact</a>
                </li>
                <li class="nav-item ms-lg-3">
                    <button id="theme-toggle" class="btn btn-outline-primary rounded-pill" type="button" aria-label="Enable dark mode"><i class="fa-solid fa-moon" aria-hidden="true"></i></button>
                </li>
            </ul>
        </div>
    </div>
</nav>
