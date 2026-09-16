<?php

namespace App\Models;

use CodeIgniter\Model;

class ContactModel extends Model
{
    protected $table = 'contacts';

    protected $primaryKey = 'id';

    protected $allowedFields = [
        'email',
        'phone',
        'linkedin',
        'github'
    ];

    protected $returnType = 'array';
}