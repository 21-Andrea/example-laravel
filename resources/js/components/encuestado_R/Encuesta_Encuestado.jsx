import React, { useState } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api/respuestas'
const endpoint_Num = 'http://localhost:8000/api/idEncuestado'
const Encuesta_E = () => {

    const thStyle = {
        color: 'black',
        borderRight: '1px solid black',
    };


    const handleSubmit = async () => {
       try {


        } catch (error) {
          console.error('Error de red', error);
          setEjecucion('Error de red');
        }
      };

    return (

        <div>

            <hr className="my-4"></hr>

            <form onSubmit={handleSubmit}>
                <table border="1" style={{ color: 'black' }} className="table table-condensed" margin="1" frame="border" rules="groups">

                    <colgroup style={{ align: 'left', width: '5%' }} ></colgroup>
                    <colgroup style={{ textAlign: 'center', width: '45%' }}></colgroup>
                    <colgroup style={{ align: 'center', width: '50%' }}></colgroup>


                    <thead valign="top">
                        <tr>
                            <th colSpan="5" style={{ color: 'black' }}><center>ENCUESTA DE SST EN LAS MIPYMES</center></th>
                        </tr>
                        <tr>
                            <th style={{ color: 'black' }}>No.</th>
                            <th style={{ color: 'black', borderRight: '1px solid black' }}>Pregunta</th>
                            <th style={{ color: 'black' }}>Respuesta</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Características Laborales y familiares</td>
                        </tr>
                        <tr className="active" >
                            <td>1</td>
                            <td style={thStyle}>Seleccione el sexo del entrevistado<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="1" id="pregunta1_1" value="Masculino"  onChange={(e) => handleChange(e, 0)} />
                                    Masculino
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="1" id="pregunta1_2" value="Femenino" onChange={(e) => handleChange(e, 0)}/>
                                    Femenino
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td style={thStyle}>¿Cuál es su edad?<label className="obligatorio">*</label></td>
                            <td>
                                <input type="number" name="2" id="pregunta2" placeholder="18" />
                            </td>
                        </tr>
                        <tr className="active">
                            <td>3</td>
                            <td style={thStyle}>¿Cómo se llama la ocupación principal que usted desempeña?<label className="obligatorio">*</label></td>
                            <td>
                                <input type="text" name="3" id="pregunta3" placeholder="Campo Obligatorio" onChange={(e) => handleChange(e, 0)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td style={thStyle}>¿Qué actividad económica desarrolla el lugar donde trabaja?<label className="obligatorio">*</label></td>
                            <td>
                                <input type="text" name="4" id="pregunta4" placeholder="Campo Obligatorio" onChange={(e) => handleChange(e, 0)}/>
                            </td>
                        </tr>
                        <tr className="active">
                            <td>5</td>
                            <td style={thStyle}>¿En su trabajo cuántos trabajadores hay? Incluyéndose usted<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="5" id="pregunta5_1" value="1_a_9" onChange={(e) => handleChange(e, 0)} />
                                    De 1 a 9
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="5" id="pregunta5_2" value="10_a_49" onChange={(e) => handleChange(e, 0)}/>
                                    De 10 a 49
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="5" id="pregunta5_3" value="50_a_119" onChange={(e) => handleChange(e, 0)}/>
                                    De 50 a 119
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td style={thStyle}>¿Cuántas personas hay en su hogar? Incluyéndose usted<label className="obligatorio">*</label></td>
                            <td>
                                <input type="number" name="6" id="pregunta6" placeholder="45" onChange={(e) => handleChange(e, 0)}/>
                            </td>
                        </tr>
                        <tr className="active">
                            <td>7</td>
                            <td style={thStyle}>¿Es usted el único en aportar económicamente en su hogar?<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="7" id="pregunta7_1" value="Si" onChange={(e) => handleChange(e, 0)}/>
                                    Si
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="7" id="pregunta7_2" value="No" onChange={(e) => handleChange(e, 0)}/>
                                    No
                                </div>
                            </td>
                        </tr>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de empleo</td>
                        </tr>
                        <tr className="active">
                            <td>8</td>
                            <td style={thStyle}>¿En su ocupación qué vínculo laboral tiene con la empresa?<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="8" id="pregunta8_1" value="Dueño" onChange={(e) => handleChange(e, 0)}/>
                                    1. Dueño
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="8" id="pregunta8_2" value="Asalariado" onChange={(e) => handleChange(e, 0)}/>
                                    2. Asalariado (a) o contratado (a)
                                </div>
                            </td>
                        </tr>

                        <tr className="active">
                            <td>9</td>
                            <td style={thStyle}>En la actualidad su tipo de contrato es:<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="9" id="pregunta9_1" value="Indefinido" onChange={(e) => handleChange(e, 0)}/>
                                    Indefinido
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="9" id="pregunta9_2" value="Temporal" onChange={(e) => handleChange(e, 0)}/>
                                    Temporal
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="9" id="pregunta9_3" value="No_posee_contrato" onChange={(e) => handleChange(e, 0)}/>
                                    No posee contrato
                                </div>
                            </td>
                        </tr>

                        <tr class="active"><td>10</td><td style={thStyle}>Solo si tiene contrato. ¿Firmo contrato escrito con su empleador?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="10" id="pregunta10_1" value="Si" onChange={(e) => handleChange(e, 0)} /> Si</div>
                            <div class='radioB'><input type="radio" name="10" id="pregunta10_2" value="No" onChange={(e) => handleChange(e, 0)}/> No </div>
                        </td></tr>
                        <tr><td>11</td><td style={thStyle}>¿Está usted asegurado como trabajador o tiene algún tipo de seguro social? <label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="11" id="pregunta11_1" value="Si"onChange={(e) => handleChange(e, 0)} /> Si</div>
                            <div class='radioB'><input type="radio" name="11" id="pregunta11_2" value="No" onChange={(e) => handleChange(e, 0)}/> No </div>
                        </td></tr>

                        <tr class="active"><td>12</td><td style={thStyle}>¿Ha hecho uso de sus derechos sociales como trabajador?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="12" id="pregunta12_1" value="Si" onChange={(e) => handleChange(e, 0)}/> Si</div>
                            <div class='radioB'><input type="radio" name="12" id="pregunta12_2" value="No" onChange={(e) => handleChange(e, 0)}/> No </div>
                        </td></tr>
                        <tr ><td>13</td><td style={thStyle}>¿trabaja usted 40 o más horas a la semana?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="13" id="pregunta13_1" value="Si" onChange={(e) => handleChange(e, 0)}/> Si</div>
                            <div class='radioB'><input type="radio" name="13" id="pregunta13_2" value="No" onChange={(e) => handleChange(e, 0)}/> No</div>
                        </td></tr>
                        <tr class="active"><td>14</td><td style={thStyle}>¿trabaja usted los 7 días de la semana?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="14" id="pregunta14_1" value="Si" onChange={(e) => handleChange(e, 0)}/> Si</div>
                            <div class='radioB'><input type="radio" name="14" id="pregunta14_2" value="No" onChange={(e) => handleChange(e, 0)}/> No</div>
                        </td></tr>
                        <tr ><td>15</td><td style={thStyle}>¿Qué tipo de jornada tiene en su trabajo?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="15" id="pregunta15_1" value="Horario_Fijo" onChange={(e) => handleChange(e, 0)}/>1. Horario Fijo</div>
                            <div class='radioB'><input type="radio" name="15" id="pregunta15_2" value="Horario_Variado_o_rotativo" onChange={(e) => handleChange(e, 0)}/> 2. Horario Variado o rotativo</div>
                        </td></tr>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo - Higiene</td>
                        </tr>

                        <tr class="active"><td>16</td><td>¿En sus actividades diarias del trabajo con que frecuencias está expuesto(a) a sustancias químicas, gases, polvillos, gases?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_1" value="Toda_jornada" onChange={(e) => handleChange(e, 0)}/>1. Toda la jornada</div>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_2" value="regularidad" onChange={(e) => handleChange(e, 0)}/> 2. Con regularidad</div>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_3" value="Menos_de_la_mitad_de_la_jornada" onChange={(e) => handleChange(e, 0)}/>3. Menos de la mitad de la jornada</div>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_4" value="Nunca" onChange={(e) => handleChange(e, 0)}/> 4. Nunca</div>
                        </td></tr>
                        <tr ><td>17</td><td>¿En su lugar de trabajo está usted expuesto(a) o manipula
                            elementos infecciosos como, desechos, materiales de laboratorio, fluidos corporales, animales?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'>  <input type="radio" name="17" id="pregunta17_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="17" id="pregunta17_2" value="No" /> No</div>
                            </td></tr>
                        <tr class="active"><td>18</td><td>¿En su lugar de trabajo, a
                            menudo tiene que alzar el tono de voz para comunicarse?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="18" id="pregunta18_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="18" id="pregunta18_2" value="No" /> No</div>
                            </td></tr>
                        <tr ><td>19</td><td>El ruido generado en su lugar de trabajo<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="19" id="pregunta19_1" value="Permite hablar con normalidad" onChange={(e) => handleChange(e, 0)}/>  Permite  hablar  con normalidad.</div>
                            <div class='radioB'><input type="radio" name="19" id="pregunta19_2" value="Requiere hablar en voz alta" onChange={(e) => handleChange(e, 0)} /> Requiere  hablar en  voz alta.</div>
                            <div class='radioB'><input type="radio" name="19" id="pregunta19_3" value="Permite solo hablar a gritos" onChange={(e) => handleChange(e, 0)}/> Permite solo hablar a gritos.</div>
                            <div class='radioB'><input type="radio" name="19" id="pregunta19_4" value="No permite comunicarse" onChange={(e) => handleChange(e, 0)}/> No permite comunicarse</div>

                        </td></tr>
                        <tr class="active"><td>20</td><td>¿En su lugar de trabajo está
                            usted expuesto a radiaciones como rayos x, radiactividad, luz de soldadura, láser?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="20" id="pregunta20_1" value="Si" onChange={(e) => handleChange(e, 0)} /> Si</div>
                                <div class='radioB'><input type="radio" name="20" id="pregunta20_2" value="No" onChange={(e) => handleChange(e, 0)}/> No</div>
                            </td></tr>
                        <tr ><td>21</td><td>¿En su lugar de trabajo está expuesto(a) a un ambiente muy caluroso?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'><input type="radio" name="21" id="pregunta21_1" value="Si" onChange={(e) => handleChange(e, 0)}/> Si</div>
                            <div class='radioB'><input type="radio" name="21" id="pregunta21_2" value="No" onChange={(e) => handleChange(e, 0)}/> No</div>
                        </td></tr>
                        <tr class="active"><td>22</td><td>¿En su lugar de trabajo está expuesto(a) a un ambiente muy frío?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'><input type="radio" name="22" id="pregunta22_1" value="Si" onChange={(e) => handleChange(e, 0)}/> Si</div>
                            <div class='radioB'><input type="radio" name="22" id="pregunta22_2" value="No" onChange={(e) => handleChange(e, 0)}/> No</div>
                        </td></tr>
                        <tr ><td>23</td><td>¿En su lugar de trabajo está expuesto(a) a vibraciones excesivas?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="23" id="pregunta23_1" value="Si" onChange={(e) => handleChange(e, 0)}/> Si</div>
                            <div class='radioB'><input type="radio" name="23" id="pregunta23_2" value="No" onChange={(e) => handleChange(e, 0)}/> No</div>
                        </td></tr>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo - Seguridad</td>
                        </tr>

                        <tr class="active"><td>24</td><td>¿En su lugar de trabajo con
                            qué frecuencia usted está expuesto(a) a superficies deslizantes, irregulares, inestables?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_1" value="Toda la jornada" />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_2" value="Con regularidad" />   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_3" value="Menos de la mitad de la jornada" />   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_4" value="Nunca" />   4. Nunca</div>

                            </td></tr>
                        <tr ><td>25</td><td>¿En su lugar de trabajo en caso de haber huecos,
                            aberturas, escaleras, plataformas, desniveles existe señalización, protecciones, antideslizantes? <label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="25" id="pregunta25_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="25" id="pregunta25_2" value="No" /> No</div>
                                <div class='radioB'><input type="radio" name="25" id="pregunta25_3" value="No Aplica" /> No Aplica</div>
                            </td></tr>
                        <tr class="active"><td>26</td><td>¿Con que frecuencia está
                            expuesto a objetos con temperaturas extremas?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_1" value="Toda la jornada" />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_2" value="Con regularidad" />   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_3" value="Menos de la mitad de la jornada" />   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_4" value="Nunca" />   4. Nunca</div>

                            </td></tr>
                        <tr ><td>27</td><td>¿En las actividades de su trabajo tiene que usar alguna
                            máquina o herramienta?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="27" id="pregunta27_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="27" id="pregunta27_2" value="No" /> No</div>
                            </td></tr>
                        <tr class="active"><td>28</td><td>¿En su actividad de trabajo es
                            posible que se genere golpes por objetos inmóviles?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="28" id="pregunta28_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="28" id="pregunta28_2" value="No" /> No</div>
                            </td></tr>
                        <tr ><td>29</td><td>¿En su actividad de trabajo es posible que se genere golpes
                            por objetos móviles?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="29" id="pregunta29_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="29" id="pregunta29_2" value="No" /> No</div>
                            </td></tr>
                        <tr class="active"><td>30</td><td>¿En su actividad de trabajo se
                            desprende o salpica algún tipo de material?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'><input type="radio" name="30" id="pregunta30_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="30" id="pregunta30_2" value="No" /> No</div>
                            </td></tr>
                        <tr ><td>31</td><td>¿En su actividad de trabajo
                            considera que puede existir atrapamiento entre usted y cualquier objeto?<label class="obligatorio">*</label>
                        </td><td> <div class='radioB'><input type="radio" name="31" id="pregunta31_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="31" id="pregunta31_2" value="No" /> No</div></td></tr>
                        <tr class="active"><td>32</td><td>¿Las herramientas que usa en
                            sus actividades laborales pueden generarle golpes o cortes en su cuerpo?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'><input type="radio" name="32" id="pregunta32_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="32" id="pregunta32_2" value="No" /> No</div></td></tr>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo - Ergonómicas</td>
                        </tr>


                        <tr ><td>33</td><td>¿En su lugar de trabajo con
                            qué frecuencia usted realiza actividades donde tiene que mantener posturas incómodas? <label class="obligatorio">*</label></td><td>
                                <div class='radioB'> <input type="radio" name="33" id="pregunta33_1" value="Toda la jornada" />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="33" id="pregunta33_2" value="Con regularidad" />   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="33" id="pregunta33_3" value="Menos de la mitad de la jornada" />   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="33" id="pregunta33_4" value="Nunca" />   4. Nunca</div>

                            </td></tr>
                        <tr class="active"><td>34</td><td>¿En las actividades de su
                            trabajo usted levanta, o trasladas cargas pesadas (objetos, animales, personas)?<label class="obligatorio">*</label></td><td>

                                <div class='radioB'> <input type="radio" name="34" id="pregunta34_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="34" id="pregunta34_2" value="No" /> No</div>
                            </td></tr>
                        <tr ><td>35</td><td>¿En las actividades de su trabajo realiza usted movimientos repetitivos
                            con sus extremidades? <label class="obligatorio">*</label></td><td>

                                <div class='radioB'><input type="radio" name="35" id="pregunta35_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="35" id="pregunta35_2" value="No" /> No</div>
                            </td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Demanda)</td>
                        </tr>


                        <tr class="active"><td>36</td><td>¿A menudo usted realiza
                            tareas difíciles o complejas en su trabajo?<label class="obligatorio">*</label>
                        </td><td> <div class='radioB'><input type="radio" name="36" id="pregunta36_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="36" id="pregunta36_2" value="No" /> No</div>
                            </td></tr>
                        <tr ><td>37</td><td>¿Sus actividades requieren de
                            gran esfuerzo y concentración?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="37" id="pregunta37_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="37" id="pregunta37_2" value="No" /> No</div></td></tr>
                        <tr class="active"><td>38</td><td>¿En su trabajo se ve
                            obligado(a) a esconder sus emociones?<label class="obligatorio">*</label>
                        </td><td><div class='radioB'><input type="radio" name="38" id="pregunta38_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="38" id="pregunta38_2" value="No" /> No</div></td></tr>
                        <tr ><td>39</td><td>¿En su trabajo con qué
                            frecuencia tiene que acelerar el ritmo en la ejecución de
                            tareas?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="39" id="pregunta39_1" value="Toda la jornada" />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="39" id="pregunta39_2" value="Con regularidad" />   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="39" id="pregunta39_3" value="Menos de la mitad de la jornada" />   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="39" id="pregunta39_4" value="Nunca" />   4. Nunca</div>
                            </td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Control)  </td>
                        </tr>
                        <tr class="active"><td>40</td><td>¿La ocupación que tiene le
                            permite desarrollar sus
                            habilidades y destrezas?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'> <input type="radio" name="40" id="pregunta40_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="40" id="pregunta40_2" value="No" /> No</div></td></tr>
                        <tr ><td>41</td><td>¿En su trabajo tiene la
                            posibilidad de hacer aquello
                            en lo que se destaca?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="41" id="pregunta41_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="41" id="pregunta41_2" value="No" /> No</div></td></tr>
                        <tr class="active"><td>42</td><td>¿En su trabajo puede
                            organizar o cambiar el orden
                            de sus tareas?<label class="obligatorio">*</label></td><td><div class='radioB'><input type="radio" name="42" id="pregunta42_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="42" id="pregunta42_2" value="No" /> No</div></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Apoyo social)</td>
                        </tr>

                        <tr ><td>43</td><td>Si tiene superiores o jefes
                            ¿Ha notado interés de su jefe
                            por el bienestar de sus
                            trabajadores?<label class="obligatorio">*</label>
                        </td><td> <div class='radioB'><input type="radio" name="43" id="pregunta43_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="43" id="pregunta43_2" value="No" /> No</div>
                                <div class='radioB'><input type="radio" name="43" id="pregunta43_3" value="No Aplica" /> No Aplica</div></td></tr>
                        <tr class="active"><td>44</td><td>En caso de tener compañeros
                            de trabajo, ¿Se ayudan
                            mutuamente?<label class="obligatorio">*</label> </td><td><div class='radioB'><input type="radio" name="44" id="pregunta44_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="44" id="pregunta44_2" value="No" /> No</div>
                                <div class='radioB'><input type="radio" name="44" id="pregunta44_3" value="No Aplica" /> No Aplica</div></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Recompensa)</td>
                        </tr>

                        <tr ><td>45</td><td>¿Dónde usted trabaja tiene la
                            posibilidad de mejorar en su
                            carrera profesional?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="45" id="pregunta45_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="45" id="pregunta45_2" value="No" /> No</div></td></tr>
                        <tr class="active"><td>46</td><td>¿Considera usted que su
                            trabajo es estable?<label class="obligatorio">*</label>
                        </td><td><div class='radioB'><input type="radio" name="46" id="pregunta46_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="46" id="pregunta46_2" value="No" /> No</div></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Salud ocupacional</td>
                        </tr>
                        <tr ><td>47</td><td>En general como percibe su
                            salud:<label class="obligatorio">*</label></td><td> <div class='radioB'>
                                <input type="radio" name="47" id="pregunta47_1" value="Estable" />   1. Estable</div>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_2" value="Regular" />   2. Regular</div>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_3" value="Inestable" />   3. Inestable</div>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_4" value="Pesima" />   4. Pésima</div>
                            </td></tr>
                        <tr class="active"><td>48</td><td>¿Ha tenido dificultad en
                            concentrarse, dormir o en recordar las cosas?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="48" id="pregunta48_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="48" id="pregunta48_2" value="No" /> No</div></td></tr>
                        <tr ><td>49</td><td>Ultimadamente ha tenido usted estos síntomas<label class="obligatorio">*</label>
                        </td><td><div class='radioB'>
                            <input type="radio" name="49" id="pregunta49_1" value="Olvida con facilidad y le cuesta recordar" />  Olvida con facilidad y le cuesta recordar</div>
                                <div class='radioB'>
                                    <input type="radio" name="49" id="pregunta49_2" value="Tiene en mente los problemas del trabajo" />  Tiene en mente los problemas del trabajo</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_3" value="Cambia de ánimo muy seguido" />    Cambia de ánimo muy seguido</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_4" value="Se siente alterado o tenso" />   Se siente alterado o tenso</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_5" value="Dificultad para dormir" />  Dificultad para dormir</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_6" value="Pierde la concentración con facilidad" /> Pierde la concentración con facilidad</div>
                            </td></tr>
                        <tr class="active"><td>50</td><td>¿En los últimos meses ha tenido algún tipo de lesión por motivo de su trabajo?
                            <label class="obligatorio">*</label></td><td><div class='radioB'><input type="radio" name="50" id="pregunta50_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="50" id="pregunta50_2" value="No" /> No</div></td></tr>
                        <tr ><td>51</td><td>¿Le han diagnosticado algún tipo de enfermedad o se encuentra en el proceso de
                            reconocimiento de una enfermedad profesional? <label class="obligatorio">*</label></td><td><div class='radioB'><input type="radio" name="51" id="pregunta51_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="51" id="pregunta51_2" value="No" /> No</div></td></tr>
                        <tr class="active"><td>52</td><td>En caso de haber tenido un accidente de trabajo ¿Cuánto tiempo estuvo en reposo?
                            (Escriba el total de días) </td><td><input type="number" name="52" id="pregunta52" placeholder="Opcional" rows="90" cols="90" size="65" /></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Recursos y Actividades preventivas</td>
                        </tr>

                        <tr ><td>53</td><td>¿En su lugar de trabajo le han
                            informado acerca de los riesgos laborales presentes y
                            las medidas que debe tomar?<label class="obligatorio">*</label></td><td> <div class='radioB'>  <input type="radio" name="53" id="pregunta53_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="53" id="pregunta53_2" value="No" /> No </div></td></tr>
                        <tr class="active"><td>54</td><td>¿En su trabajo tiene a su
                            disposición los equipos de protección personal? <label class="obligatorio">*</label></td><td><div class='radioB'>  <input type="radio" name="54" id="pregunta54_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="54" id="pregunta54_2" value="No" /> No </div>
                                <div class='radioB'>  <input type="radio" name="54" id="pregunta54_3" value="No Aplica" /> No Aplica</div></td></tr>
                        <tr class="active"><td>55</td><td>¿En el lugar donde trabaja
                            existe algún tipo de servicio en prevención de riesgos
                            laborales o de salud ocupacional?<label class="obligatorio">*</label></td><td><div class='radioB'>  <input type="radio" name="55" id="pregunta55_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="55" id="pregunta55_2" value="No" /> No </div>
                                <div class='radioB'>  <input type="radio" name="55" id="pregunta55_3" value="Desconoce" /> Desconoce</div></td></tr>
                        <tr ><td>56</td><td>¿Existe algún comité o un
                            grupo organizado para la higiene y seguridad de los
                            trabajadores en su lugar de trabajo?<label class="obligatorio">*</label></td><td><div class='radioB'>  <input type="radio" name="56" id="pregunta55_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="56" id="pregunta56_2" value="No" /> No </div>
                                <div class='radioB'>  <input type="radio" name="56" id="pregunta56_3" value="Desconoce" /> Desconoce</div></td></tr>
                        <tr class="active"><td>57</td><td>En los últimos meses ¿Ha
                            sido participe de la identificación de peligros?<label class="obligatorio">*</label>
                        </td><td><div class='radioB'>  <input type="radio" name="57" id="pregunta57_1" value="Si" /> Si</div>
                                <div class='radioB'><input type="radio" name="57" id="pregunta57_2" value="No" /> No </div>
                                <div class='radioB'>  <input type="radio" name="57" id="pregunta57_3" value="Desconoce" /> Desconoce</div></td></tr>
                    </tbody>
                </table>
                <div className="card" style={{ marginLeft: '3%', marginRight: '3%' }}>
                    <div className="card-header">
                        Envío de Encuesta
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: 'black' }}>Finalizar Encuesta sobre la Seguridad Industrial en los Talleres</h5>
                        <p className="card-text">Recuerde responder todas las preguntas.</p>
                        <button type="submit" id="Enviar" className="btn btn-primary">Finalizar Encuesta</button>
                    </div>
                </div>

            </form>

        </div>
    );
}

export default Encuesta_E;
