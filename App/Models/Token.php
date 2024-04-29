<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'token',
        'certificate_type_id',
        'code',
        'crc',
        'number',
        'document',
        'signature',
        'date_time_signature'
    ];
}
