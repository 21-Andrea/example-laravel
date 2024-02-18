<?php

namespace Database\Seeders;

use App\Models\encuesta;
use App\Models\preguntas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class tbl_preguntas extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $encuesta = encuesta::first();
        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Cuál es su edad?";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Cómo se llama la ocupación principal que usted desempeña?";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Qué actividad económica desarrolla el lugar donde trabaja?";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En su curso cuantos docentes imparten los talleres? Incluyéndose usted";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Cuántas personas conforman su curso? Incluyéndose usted";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Conoce los fundamentos y conocimientos básicos sobre el taller ?";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Que actividad desarrolla con mayor frecuencia en los talleres?";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="En la actualidad el desarrollo de talleres se realizan de manera:";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Conoce sobre la seguridad y precaución para el desarrollo de los talleres";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Tiene algún tipo de seguro social o médico?";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Ha requerido atención médica durante el desarrollo de talleres?";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Utiliza usted los talleres 6 o más horas a la semana?";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Utiliza los talleres mas 3 días de la semana?";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Qué tipo de jornada tiene en sus estudios?";
        $preguntas->categoria="CondicionesDeEmpleo";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En el desarrollo de talleres con que frecuencias está expuesto(a) a sustancias químicas, gases, polvillos, gases?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En los talleres está usted expuesto(a) o manipula elementos infecciosos?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Durante el desarrollo de actividades dentro de los talleres, a menudo tiene que alzar el tono de voz para comunicarse?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="El ruido generado en el realizado trabajo en los talleres";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Usted está expuesto a luz de soldadura, láser, etc?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Está expuesto(a) a un ambiente muy caluroso?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Está expuesto(a) a un ambiente muy frío?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Está expuesto(a) a vibraciones excesivas?";
        $preguntas->categoria="CondicionesDeTrabajoHigiene";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En los talleres con qué frecuencia usted está expuesto(a) a superficies deslizantes, irregulares, inestables?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En los talleres existen escaleras, plataformas, desniveles existe señalización, protecciones, antideslizantes?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Con que frecuencia está expuesto a objetos con temperaturas extremas?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En las actividades tiene que usar alguna máquina o herramienta?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En su actividad durante los talleres es posible que se genere golpes por objetos inmóviles?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();



        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En su actividad durante los talleres es posible que se genere golpes por objetos móviles?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="	¿En su actividad de trabajo se desprende o salpica algún tipo de material?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿En su actividad de trabajo considera que puede existir atrapamiento entre usted y cualquier objeto?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="¿Las herramientas que usa en sus actividades laborales pueden generarle golpes o cortes en su cuerpo?";
        $preguntas->categoria="CondicionesDeTrabajoSeguridad";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        /////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////
        /*
        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();

        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();


        $preguntas=new preguntas();
        $preguntas->Preguntas="Seleccione el sexo del entrevistado";
        $preguntas->categoria="CaracteristicasLaboralesyfamiliares";
        $preguntas->id_e= $encuesta->id;
        $preguntas->save();
        */

    }
}
