<?= $this->extend('admin/layout/main') ?>

<?= $this->section('content') ?>

<h2 class="mb-4">

Dashboard

</h2>

<div class="row g-4">

<div class="col-md-3">

<div class="card-dashboard text-center">

<i class="fa-solid fa-user"></i>

<h4>About</h4>

<a href="<?= base_url('admin/about') ?>"
class="btn btn-primary mt-3">
Manage
</a>

</div>

</div>

<div class="col-md-3">

<div class="card-dashboard text-center">

<i class="fa-solid fa-code"></i>

<h4>Skills</h4>

<a href="<?= base_url('admin/skills') ?>"
class="btn btn-primary mt-3">
Manage
</a>

</div>

</div>

<div class="col-md-3">

<div class="card-dashboard text-center">

<i class="fa-solid fa-folder"></i>

<h4>Projects</h4>

<a href="<?= base_url('admin/projects') ?>"
class="btn btn-primary mt-3">
Manage
</a>

</div>

</div>

<div class="col-md-3">

<div class="card-dashboard text-center">

<i class="fa-solid fa-envelope"></i>

<h4>Contact</h4>

<a href="<?= base_url('admin/contact') ?>"
class="btn btn-primary mt-3">
Manage
</a>

</div>

</div>

</div>

<?= $this->endSection() ?>