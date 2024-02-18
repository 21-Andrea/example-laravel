<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class administrador extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table='administrador';
     /**
     * Get all of the compras for the Articulo
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */

 /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

     protected $hidden = [
        //'username'    //ALERTA
    ];
     /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'username',
        'password',
        'cedula_U',
    ];


    public function usuario(): BelongsTo
    {
        return $this->belongsTo(usuario::class,'cedula');
    }

    /*
    public function usuario(): HasMany
    {
        return $this->HasMany(usuario::class,'cedula');
    }
*/
}
