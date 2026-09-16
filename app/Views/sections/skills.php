<section class="skills" id="skills">

<div class="container">

    <div class="text-center mb-5">

        <h2 class="section-title">My Skills</h2>

        <p class="section-subtitle">
            Teknologi yang saya gunakan dalam proses belajar dan pengembangan aplikasi.
        </p>

    </div>

    <div class="row g-4">

        <?php foreach ($skills as $skill): ?>

        <div class="col-lg-3 col-md-6">

            <div class="skill-card">

                <div class="skill-icon">

                    <i class="<?= esc($skill['icon']) ?>"></i>

                </div>

                <h4><?= esc($skill['skill_name']) ?></h4>

                <div class="progress">

                    <div class="progress-bar"
                         style="width: <?= esc($skill['percentage']) ?>%;">
                    </div>

                </div>

                <p><?= esc($skill['percentage']) ?>%</p>

            </div>

        </div>

        <?php endforeach; ?>

    </div>

</div>

</section>