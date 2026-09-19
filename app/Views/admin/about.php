<?= $this->extend('admin/layout/main') ?>

<?= $this->section('content') ?>

<h2 class="mb-4">
Manage About
</h2>

<?php if(session()->getFlashdata('success')): ?>

<div class="alert alert-success">

<?= session()->getFlashdata('success') ?>

</div>

<?php endif; ?>

<div class="card p-4 shadow border-0">

<form action="<?= base_url('admin/about/update') ?>" method="post">

<div class="mb-3">

<label class="form-label">
Title
</label>

<input
type="text"
name="title"
class="form-control"
value="<?= esc($about['title']) ?>">

</div>

<div class="mb-3">

<label class="form-label">
Description
</label>

<textarea
name="description"
rows="8"
class="form-control"><?= esc($about['description']) ?></textarea>

</div>

<button class="btn btn-primary">

<i class="fa-solid fa-floppy-disk"></i>

Save

</button>

</form>

</div>
<a href="<?= base_url('admin/dashboard') ?>"
class="btn btn-secondary">

Dashboard

</a>

<?= $this->endSection() ?>