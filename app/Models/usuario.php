<?php

namespace App\Models;

use App\Models\encuestado;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class usuario extends Model
{
    use HasFactory;
    protected $table='usuario';
    protected $primaryKey = 'cedula';



    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

    public function setName($value)
    {
        $this->attributes['cedula'] = strtolower($value);
    }

/*
    public function administrador():BelongsTo
    {
        return $this->BelongsTo(administrador::class, 'cedula_U');
    }*/

    public function tipo(): BelongsTo
    {
        return $this->belongsTo(Tipo::class,'id_T_U');
    }


    public function administrador()
    {
        return $this->hasMany(administrador::class);
    }
    public function encuestado()
    {
        return $this->hasOne(encuestado::class, 'cedula_U');

        /*  return $this->hasMany(encuestado::class);*/
    }


}
