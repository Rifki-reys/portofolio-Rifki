<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title><?= $title ?? 'Admin Panel'; ?></title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

<link rel="stylesheet" href="<?= base_url('css/admin.css') ?>">

</head>

<body>

<div class="wrapper">

    <?= $this->include('admin/layout/sidebar') ?>

    <div class="main-content">

        <?= $this->include('admin/layout/navbar') ?>

        <div class="content">

            <?= $this->renderSection('content') ?>

        </div>

    </div>

</div>

</body>

</html>