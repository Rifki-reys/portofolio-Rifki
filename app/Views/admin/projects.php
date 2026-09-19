<?= $this->extend('admin/layout/main') ?>

<?= $this->section('content') ?>

<h2 class="mb-4">Manage Projects</h2>

<div class="card shadow p-4 mb-5">

    <form action="<?= base_url('admin/projects/add') ?>"
          method="post"
          enctype="multipart/form-data">

        <div class="mb-3">
            <label class="form-label">Project Title</label>
            <input type="text"
                   name="title"
                   class="form-control"
                   required>
        </div>

        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea name="description"
                      class="form-control"
                      rows="4"
                      required></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Github</label>
            <input type="text"
                   name="github"
                   class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">Demo</label>
            <input type="text"
                   name="demo"
                   class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">Image</label>
            <input type="file"
                   name="image"
                   class="form-control">
        </div>

        <button class="btn btn-primary">
            <i class="fa-solid fa-plus"></i>
            Save Project
        </button>

    </form>

</div>

<div class="card shadow">

    <div class="card-header">
        <h4 class="mb-0">Project List</h4>
    </div>

    <div class="card-body">

        <table class="table table-bordered table-hover align-middle">

            <thead>

                <tr>

                    <th width="50">No</th>

                    <th width="130">Image</th>

                    <th>Title</th>

                    <th>Github</th>

                    <th>Demo</th>

                    <th width="170">Action</th>

                </tr>

            </thead>

            <tbody>

            <?php if(!empty($projects)): ?>

            <?php $no=1; ?>

            <?php foreach($projects as $project): ?>

            <tr>

                <td><?= $no++ ?></td>

                <td>

                    <?php if(!empty($project['image'])): ?>

                    <img
                    src="<?= base_url('uploads/projects/'.$project['image']) ?>"
                    width="100">

                    <?php endif; ?>

                </td>

                <td><?= esc($project['title']) ?></td>

                <td><?= esc($project['github']) ?></td>

                <td><?= esc($project['demo']) ?></td>

                <td>

                    <a href="<?= base_url('admin/projects/edit/'.$project['id']) ?>"
                       class="btn btn-warning btn-sm">

                        Edit

                    </a>

                    <a href="<?= base_url('admin/projects/delete/'.$project['id']) ?>"
                       class="btn btn-danger btn-sm"
                       onclick="return confirm('Are you sure you want to delete this project?')">

                        Delete

                    </a>

                </td>

            </tr>

            <?php endforeach; ?>

            <?php else: ?>

            <tr>

                <td colspan="6" class="text-center">

                    No projects yet.

                </td>

            </tr>

            <?php endif; ?>

            </tbody>

        </table>

    </div>

</div>

<?= $this->endSection() ?>