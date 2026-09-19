<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        $data = [

        [

            'title'=>'Portfolio Website',

            'description'=>'Personal portfolio website built with CodeIgniter 4.',

            'image'=>'portfolio.jpg',

            'github'=>'https://github.com/',

            'demo'=>'#'

        ],

        [

            'title'=>'Laundry Management System',

            'description'=>'Web-based laundry management application.',

            'image'=>'laundry.jpg',

            'github'=>'https://github.com/',

            'demo'=>'#'

        ]

    ];

    $this->db->table('projects')->insertBatch($data);
    }
}
