<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class ContactSeeder extends Seeder
{
    public function run()
    {
          $this->db->table('contacts')->insert([
        'email'=>'rifki@email.com',
        'phone'=>'08123456789',
        'linkedin'=>'https://linkedin.com/',
        'github'=>'https://github.com/'
    ]);
    }
}
