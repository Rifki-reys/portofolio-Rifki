<?php

namespace App\Controllers;

use App\Models\AboutModel;
use App\Models\SkillModel;
use App\Models\ProjectModel;

class Home extends BaseController
{
    public function index()
    {
        $aboutModel = new AboutModel();
        $skillModel = new SkillModel();
        $projectModel = new ProjectModel();

        $data = [
            'about'    => $aboutModel->first(),
            'skills'   => $skillModel->findAll(),
            'projects' => $projectModel->findAll()
        ];

        return view('home', $data);
    }
}