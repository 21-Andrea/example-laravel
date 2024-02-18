<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class respuestas extends Model
{
    use HasFactory;
    protected $table='respuestas';

    public function encuestado(): BelongsTo
    {
        return $this->belongsTo(encuestado::class,'id_e');
    }

    public function preguntas(): BelongsTo
    {
        return $this->belongsTo(preguntas::class,'id_p');
    }


}

