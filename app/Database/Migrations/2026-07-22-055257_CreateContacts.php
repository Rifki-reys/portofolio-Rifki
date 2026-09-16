<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateContacts extends Migration
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
        'email'=>[
            'type'=>'VARCHAR',
            'constraint'=>150
        ],
        'phone'=>[
            'type'=>'VARCHAR',
            'constraint'=>20
        ],
        'linkedin'=>[
            'type'=>'VARCHAR',
            'constraint'=>255
        ],
        'github'=>[
            'type'=>'VARCHAR',
            'constraint'=>255
        ]
    ]);

    $this->forge->addKey('id',true);
    $this->forge->createTable('contacts');
    }

    public function down()
    {
        //
    }
}
