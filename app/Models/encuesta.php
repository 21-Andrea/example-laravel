<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Casts\Attribute;

class encuesta extends Model
{
    use HasFactory;
    protected $table='encuesta';

    protected function nombre(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) =>strtolower($value),
        );
    }

    public function setNameAttribute($value)
    {
        $this->attributes['nombre'] = strtolower($value);
    }


    public function preguntas()
    {
        return $this->hasMany(preguntas::class);
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'descripcion'
    ];

}
