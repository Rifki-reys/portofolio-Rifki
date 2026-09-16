<section class="projects" id="projects">

<div class="container">

<div class="text-center mb-5">
    <h2 class="section-title">Featured Projects</h2>

    <p class="section-subtitle">
        Beberapa project yang pernah saya kerjakan.
    </p>
</div>

<div class="row g-4">

<?php foreach ($projects as $project): ?>

<div class="col-lg-4">

    <div class="project-card">

        <img
            src="<?= base_url('uploads/projects/'.$project['image']) ?>"
            class="img-fluid"
            alt="<?= esc($project['title']) ?>">

        <div class="project-content">

            <h4><?= esc($project['title']) ?></h4>

            <p><?= esc($project['description']) ?></p>

            <div class="project-buttons">

                <?php if (!empty($project['github'])) : ?>
                    <a href="<?= esc($project['github']) ?>"
                       class="btn btn-primary"
                       target="_blank">
                        Github
                    </a>
                <?php endif; ?>

                <?php if (!empty($project['demo'])) : ?>
                    <a href="<?= esc($project['demo']) ?>"
                       class="btn btn-outline-primary"
                       target="_blank">
                        Demo
                    </a>
                <?php endif; ?>

            </div>

        </div>

    </div>

</div>

<?php endforeach; ?>

</div>

</div>

</section>