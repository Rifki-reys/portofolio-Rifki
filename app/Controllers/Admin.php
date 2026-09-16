<?php

namespace App\Controllers;

use App\Models\UserModel;
use App\Models\AboutModel;

class Admin extends BaseController
{
    public function login()
    {
        return view('admin/login');
    }

    public function dashboard()
    {
        if (!session()->get('logged_in')) {
            return redirect()->to('/admin');
        }

        return view('admin/dashboard');
    }

    public function auth()
    {
        $userModel = new UserModel();

        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        $user = $userModel->where('email', $email)->first();

        if (!$user) {
            return redirect()->back()->with('error', 'Email tidak ditemukan');
        }

        if (!password_verify($password, $user['password'])) {
            return redirect()->back()->with('error', 'Password salah');
        }

        session()->set([
    'user_id'   => $user['id'],
    'username'  => $user['username'],
    'logged_in' => true
]);

        return redirect()->to('/admin/dashboard');
    }

    public function logout()
    {
        session()->destroy();
        return redirect()->to('/admin');
    }
    public function about()
{
    if (!session()->get('logged_in')) {
        return redirect()->to('/admin');
    }

    $model = new AboutModel();

    $data = [
        'title' => 'Kelola About',
        'about' => $model->first()
    ];

    return view('admin/about', $data);
}

public function updateAbout()
{
    $model = new AboutModel();

    $model->update(1,[
        'title'       => $this->request->getPost('title'),
        'description' => $this->request->getPost('description')
    ]);

    return redirect()->back()->with('success','Data berhasil diperbarui');
}

public function skills()
{
    if (!session()->get('logged_in')) {
        return redirect()->to('/admin');
    }

    $model = new \App\Models\SkillModel();

    $data = [
        'title' => 'Kelola Skills',
        'skills' => $model->findAll()
    ];

    return view('admin/skills', $data);
}

public function addSkill()
{
    $model = new \App\Models\SkillModel();

    $model->save([
        'skill_name' => $this->request->getPost('skill_name'),
        'percentage' => $this->request->getPost('percentage'),
        'icon'       => $this->request->getPost('icon')
    ]);

    return redirect()->to('/admin/skills');
}

public function editSkill($id)
{
    $model = new \App\Models\SkillModel();

    $model->update($id,[
        'skill_name'=>$this->request->getPost('skill_name'),
        'percentage'=>$this->request->getPost('percentage'),
        'icon'=>$this->request->getPost('icon')
    ]);

    return redirect()->to('/admin/skills');
}

public function deleteSkill($id)
{
    $model = new \App\Models\SkillModel();

    $model->delete($id);

    return redirect()->to('/admin/skills');
}

public function projects()
{
    if (!session()->get('logged_in')) {
        return redirect()->to('/admin');
    }

    $model = new \App\Models\ProjectModel();

    $data = [
        'title'    => 'Kelola Project',
        'projects' => $model->findAll()
    ];

    return view('admin/projects', $data);
}

public function addProject()
{
    $model = new \App\Models\ProjectModel();

    $file = $this->request->getFile('image');

    $namaFile = '';

    if ($file && $file->isValid()) {

        $namaFile = $file->getRandomName();

        $file->move(FCPATH . 'uploads/projects', $namaFile);

    }

    $model->save([
        'title'       => $this->request->getPost('title'),
        'description' => $this->request->getPost('description'),
        'github'      => $this->request->getPost('github'),
        'demo'        => $this->request->getPost('demo'),
        'image'       => $namaFile
    ]);

    return redirect()->to('/admin/projects')
                     ->with('success','Project berhasil ditambahkan');
}

public function editProject($id)
{
    $model = new \App\Models\ProjectModel();

    $model->update($id,[
        'title'       => $this->request->getPost('title'),
        'description' => $this->request->getPost('description'),
        'image'       => $this->request->getPost('image'),
        'link'        => $this->request->getPost('link')
    ]);

    return redirect()->to('/admin/projects');
}

public function deleteProject($id)
{
    $model = new \App\Models\ProjectModel();

    // Ambil data project
    $project = $model->find($id);

    // Hapus gambar dari folder
    if ($project && !empty($project['image'])) {

        $path = FCPATH . 'uploads/projects/' . $project['image'];

        if (file_exists($path)) {
            unlink($path);
        }
    }

    // Hapus data dari database
    $model->delete($id);

    return redirect()->to('/admin/projects')
                     ->with('success', 'Project berhasil dihapus');
}

public function contact()
{
    if (!session()->get('logged_in')) {
        return redirect()->to('/admin');
    }

    $model = new \App\Models\ContactModel();

    $data = [
        'title' => 'Kelola Contact',
        'contact' => $model->first()
    ];

    return view('admin/contact', $data);
}


}