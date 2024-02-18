<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class encuestado extends Model
{
    use HasFactory;
    protected $table='encuestado';
      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'Empresa',
        'Cargo',
        'Ciudad',
        'Celular',
        'Correo',
        'cedula_U'
    ];

    public function usuario(): BelongsTo
    {
        return $this->belongsTo(usuario::class,'cedula');
    }

    public function respuestas()
    {
        return $this->hasMany(respuestas::class);
    }

}
