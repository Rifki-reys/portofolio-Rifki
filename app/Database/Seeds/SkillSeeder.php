<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run()
    {
        $data = [

        [
            'skill_name'=>'HTML',
            'percentage'=>95,
            'icon'=>'fa-html5'
        ],

        [
            'skill_name'=>'CSS',
            'percentage'=>90,
            'icon'=>'fa-css3-alt'
        ],

        [
            'skill_name'=>'JavaScript',
            'percentage'=>80,
            'icon'=>'fa-js'
        ],

        [
            'skill_name'=>'PHP',
            'percentage'=>85,
            'icon'=>'fa-php'
        ],

        [
            'skill_name'=>'CodeIgniter 4',
            'percentage'=>85,
            'icon'=>'fa-fire'
        ],

        [
            'skill_name'=>'MySQL',
            'percentage'=>85,
            'icon'=>'fa-database'
        ],

        [
            'skill_name'=>'Docker',
            'percentage'=>70,
            'icon'=>'fa-docker'
        ],

        [
            'skill_name'=>'AWS',
            'percentage'=>60,
            'icon'=>'fa-aws'
        ]

    ];

    $this->db->table('skills')->insertBatch($data);
    }
}
