<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateSkills extends Migration
{
    public function up()
    {
        $this->forge->addField([
        'id'=>[
            'type'=>'INT',
            'constraint'=>11,
            'unsigned'=>true,
            'auto_increment'=>true
        ],
        'skill_name'=>[
            'type'=>'VARCHAR',
            'constraint'=>100
        ],
        'percentage'=>[
            'type'=>'INT',
            'constraint'=>3
        ],
        'icon'=>[
            'type'=>'VARCHAR',
            'constraint'=>100
        ]
    ]);

    $this->forge->addKey('id',true);
    $this->forge->createTable('skills');
    }

    public function down()
    {
        //
    }
}
