<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class AboutSeeder extends Seeder
{
    public function run()
    {
         $this->db->table('about')->insert([
        'title' => 'Information Systems Student',
        'description' => 'I am an Information Systems student with a strong interest in Web Development, Cloud Computing, Databases, and UI/UX Design.',
        'photo' => 'foto-profile.png'
    ]);
    }
}
