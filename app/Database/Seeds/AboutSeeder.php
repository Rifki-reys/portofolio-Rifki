<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class AboutSeeder extends Seeder
{
    public function run()
    {
         $this->db->table('about')->insert([
        'title' => 'Mahasiswa Sistem Informasi',
        'description' => 'Saya adalah mahasiswa Sistem Informasi yang memiliki ketertarikan pada Web Development, Cloud Computing, Database dan UI/UX Design.',
        'photo' => 'foto-profile.png'
    ]);
    }
}
