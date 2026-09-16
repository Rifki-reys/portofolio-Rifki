<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        $data = [

        [

            'title'=>'Website Portfolio',

            'description'=>'Website portfolio pribadi menggunakan CodeIgniter 4.',

            'image'=>'portfolio.jpg',

            'github'=>'https://github.com/',

            'demo'=>'#'

        ],

        [

            'title'=>'Sistem Laundry',

            'description'=>'Aplikasi Laundry berbasis Web.',

            'image'=>'laundry.jpg',

            'github'=>'https://github.com/',

            'demo'=>'#'

        ]

    ];

    $this->db->table('projects')->insertBatch($data);
    }
}
