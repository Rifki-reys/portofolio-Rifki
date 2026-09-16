<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateProjects extends Migration
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
        'title'=>[
            'type'=>'VARCHAR',
            'constraint'=>150
        ],
        'description'=>[
            'type'=>'TEXT'
        ],
        'image'=>[
            'type'=>'VARCHAR',
            'constraint'=>255
        ],
        'github'=>[
            'type'=>'VARCHAR',
            'constraint'=>255
        ],
        'demo'=>[
            'type'=>'VARCHAR',
            'constraint'=>255
        ]
    ]);

    $this->forge->addKey('id',true);
    $this->forge->createTable('projects');
    }

    public function down()
    {
        //
    }
}
