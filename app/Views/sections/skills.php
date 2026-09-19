<section class="skills" id="skills">

<div class="container">

    <div class="text-center mb-5">

        <h2 class="section-title">Technical Skills</h2>

        <p class="section-subtitle">
            Technologies and tools i use to build web application
        </p>

    </div>

    <div class="row g-4">

        <?php
        $skillMeta = [
            'html' => [
                'role' => 'Frontend',
                'function' => 'Semantic structure and accessible markup for modern web apps.'
            ],
            'css' => [
                'role' => 'Frontend',
                'function' => 'Responsive layouts, visual styling, animations, and modern UI design.'
            ],
            'javascript' => [
                'role' => 'Frontend & Backend',
                'function' => 'Dynamic client-side interactivity, DOM logic, and async API integration.'
            ],
            'php' => [
                'role' => 'Backend',
                'function' => 'Server-side application logic, request handling, and backend APIs.'
            ],
            'codeigniter 4' => [
                'role' => 'Backend Framework',
                'function' => 'Lightweight MVC architecture for fast and secure web application development.'
            ],
            'codeigniter' => [
                'role' => 'Backend Framework',
                'function' => 'Lightweight MVC architecture for fast and secure web application development.'
            ],
            'mysql' => [
                'role' => 'Database',
                'function' => 'Relational database management, data modeling, and optimized SQL queries.'
            ],
            'node js' => [
                'role' => 'Backend',
                'function' => 'JavaScript runtime for high-performance server-side services and APIs.'
            ],
            'nodejs' => [
                'role' => 'Backend',
                'function' => 'JavaScript runtime for high-performance server-side services and APIs.'
            ],
            'python' => [
                'role' => 'Backend & Scripting',
                'function' => 'Scripting, backend automation, and data processing tasks.'
            ],
            'git' => [
                'role' => 'Version Control',
                'function' => 'Tracks source code changes, branch management, and team collaboration.'
            ],
            'github' => [
                'role' => 'Repository & Collaboration',
                'function' => 'Cloud repository hosting, code review workflows, and CI/CD automation.'
            ],
            'docker' => [
                'role' => 'DevOps & Tooling',
                'function' => 'Packages applications into containers for consistent cross-environment deployment.'
            ],
            'aws' => [
                'role' => 'Cloud Infrastructure',
                'function' => 'Scalable cloud computing services, server management, and web application hosting.'
            ],
            'bootstrap' => [
                'role' => 'Frontend Framework',
                'function' => 'Responsive mobile-first grid system and UI component styling.'
            ],
        ];

        foreach ($skills as $skill):
            $key = strtolower(trim($skill['skill_name']));
            $role = $skill['role'] ?? ($skillMeta[$key]['role'] ?? 'Tool');
            $function = $skill['function'] ?? ($skillMeta[$key]['function'] ?? 'Technology and tool utilized for building scalable web applications.');
        ?>

        <div class="col-lg-3 col-md-6">

            <div class="skill-card">

                <div class="skill-icon">

                    <i class="<?= esc($skill['icon']) ?>"></i>

                </div>

                <h4 class="skill-name">
                    <?= esc($skill['skill_name']) ?>
                    <span class="skill-role">(<?= esc($role) ?>)</span>
                </h4>

                <p class="skill-function">
                    <?= esc($function) ?>
                </p>

            </div>

        </div>

        <?php endforeach; ?>

    </div>

</div>

</section>