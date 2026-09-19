<?= $this->extend('admin/layout/main') ?>

<?= $this->section('content') ?>

<h2 class="mb-4">Manage Skills</h2>

<div class="card p-4 shadow mb-4">

<form action="<?= base_url('admin/skills/add') ?>" method="post">

<div class="mb-3">
<label>Skill Name</label>
<input type="text" name="skill_name" class="form-control" required>
</div>

<div class="mb-3">
<label>Percentage</label>
<input type="number" name="percentage" class="form-control" required>
</div>

<div class="mb-3">
<label>FontAwesome Icon</label>
<input type="text" name="icon" class="form-control" placeholder="fa-brands fa-php">
</div>

<button class="btn btn-primary">
Add Skill
</button>

</form>

</div>

<table class="table table-bordered">

<thead>

<tr>

<th>No</th>

<th>Skill</th>

<th>%</th>

<th>Icon</th>

<th>Action</th>

</tr>

</thead>

<tbody>

<?php $no=1; ?>

<?php foreach($skills as $skill): ?>

<tr>

<td><?= $no++ ?></td>

<td><?= $skill['skill_name'] ?></td>

<td><?= $skill['percentage'] ?>%</td>

<td><i class="<?= $skill['icon'] ?>"></i> <?= $skill['icon'] ?></td>

<td>

<a href="<?= base_url('admin/skills/delete/'.$skill['id']) ?>" class="btn btn-danger btn-sm">
Delete
</a>

</td>

</tr>

<?php endforeach ?>

</tbody>

</table>

<?= $this->endSection() ?>