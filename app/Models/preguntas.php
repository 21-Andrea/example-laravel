<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class preguntas extends Model
{
    use HasFactory;
    protected $table='preguntas';

/*
    public function preguntas(): BelongsTo
    {
        return $this->belongsTo(preguntas::class,'id_e');
    }
*/

    public function encuesta(): BelongsTo
    {
        return $this->belongsTo(encuesta::class,'id_e');
    }
    public function respuestas()
    {
        return $this->hasMany(respuestas::class);
    }

}
