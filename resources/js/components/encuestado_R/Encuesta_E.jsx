import axios from 'axios'
import React, {useState , useEffect} from 'react'

import {  useNavigate } from 'react-router-dom'
//import AlertComponent from './AlertComponent'; // Importa el componente de alerta
//import AlertCompSuccefull from './AlertCompSuccefull'
import AlertComponent from '../encuestado_R/AlertCompSuccefull'; // Importa el componente de alerta
import AlertCompSuccefull from '../encuestado_R/AlertComponent';

const endpoint_E = 'http://localhost:8000/api/respuestas'
const endpoint_Num = 'http://localhost:8000/api/idEncuestado'

    const Encuesta_E = () => {
        const navigate = useNavigate()

    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [mostrarAlerta_A, setMostrarAlerta_A] = useState(false);

        const obtenerDatosDeAPI = async () => {
            try {
                const respuest = await axios.get('http://localhost:8000/api/idEncuestado');
                const numero = respuest.data; // Suponiendo que el número está en la propiedad 'data'

            } catch (error) {
                console.error('Error al obtener los datos:', error);
              }
        };

        const verificarEncuesta = () => {
            const preguntas = document.querySelectorAll('input[type="radio"]');
            let todasRespondidas = true;

            preguntas.forEach((pregunta) => {
                const nombrePregunta = pregunta.name;
                if (!document.querySelector(`input[name="${nombrePregunta}"]:checked`)) {
                    todasRespondidas = false;
                }
            });

            if (!todasRespondidas) {
                if (!mostrarAlerta_A) {
                    setMostrarAlerta_A(true);
                    setTimeout(() => {   window.location.reload();     },2000);
                 }
            } else {

                // Condición para mostrar la alerta solo si no estás en localhost y no estás en el puerto 8000
                if (window.location.hostname !== "localhost" || window.location.port !== "8000") {
                    /*setMostrarAlerta_A(true);
                    if (mostrarAlerta_A) {
                        setTimeout(() => {
                          navigate("/home");
                          window.location.reload();
                        }, 2000); // Redirige después de 2 segundos
                      }*/
                    // Puedes agregar aquí la lógica para enviar la encuesta al servidor si es necesario.
                }
            }
        };



    const thStyle = {
        color: 'black',
        borderRight: '1px solid black',
    };
    const [ select1, setSelect1]=useState({ name:null, value:null })
    const [ select2, setSelect2]=useState({ name:null, value:null })
    const [ select3, setSelect3]=useState({ name:null, value:null })
    const [ select4, setSelect4]=useState({ name:null, value:null })
    const [ select5, setSelect5]=useState({ name:null, value:null })
    const [ select6, setSelect6]=useState({ name:null, value:null })
    const [ select7, setSelect7]=useState({ name:null, value:null })
    const [ select8, setSelect8]=useState({ name:null, value:null })
    const [ select9, setSelect9]=useState({ name:null, value:null })
    const [ select10, setSelect10]=useState({ name:null, value:null })
    const [ select11, setSelect11]=useState({ name:null, value:null })
    const [ select12, setSelect12]=useState({ name:null, value:null })
    const [ select13, setSelect13]=useState({ name:null, value:null })
    const [ select14, setSelect14]=useState({ name:null, value:null })
    const [ select15, setSelect15]=useState({ name:null, value:null })
    const [ select16, setSelect16]=useState({ name:null, value:null })
    const [ select17, setSelect17]=useState({ name:null, value:null })
    const [ select18, setSelect18]=useState({ name:null, value:null })
    const [ select19, setSelect19]=useState({ name:null, value:null })
    const [ select20, setSelect20]=useState({ name:null, value:null })
    const [ select21, setSelect21]=useState({ name:null, value:null })
    const [ select22, setSelect22]=useState({ name:null, value:null })
    const [ select23, setSelect23]=useState({ name:null, value:null })
    const [ select24, setSelect24]=useState({ name:null, value:null })
    const [ select25, setSelect25]=useState({ name:null, value:null })
    const [ select26, setSelect26]=useState({ name:null, value:null })
    const [ select27, setSelect27]=useState({ name:null, value:null })
    const [ select28, setSelect28]=useState({ name:null, value:null })
    const [ select29, setSelect29]=useState({ name:null, value:null })
    const [ select30, setSelect30]=useState({ name:null, value:null })
    const [ select31, setSelect31]=useState({ name:null, value:null })
    const [ select32, setSelect32]=useState({ name:null, value:null })
    const [ select33, setSelect33]=useState({ name:null, value:null })
    const [ select34, setSelect34]=useState({ name:null, value:null })
    const [ select35, setSelect35]=useState({ name:null, value:null })
    const [ select36, setSelect36]=useState({ name:null, value:null })
    const [ select37, setSelect37]=useState({ name:null, value:null })
    const [ select38, setSelect38]=useState({ name:null, value:null })
    const [ select39, setSelect39]=useState({ name:null, value:null })
    const [ select40, setSelect40]=useState({ name:null, value:null })
    const [ select41, setSelect41]=useState({ name:null, value:null })
    const [ select42, setSelect42]=useState({ name:null, value:null })
    const [ select43, setSelect43]=useState({ name:null, value:null })
    const [ select44, setSelect44]=useState({ name:null, value:null })
    const [ select45, setSelect45]=useState({ name:null, value:null })
    const [ select46, setSelect46]=useState({ name:null, value:null })
    const [ select47, setSelect47]=useState({ name:null, value:null })
    const [ select48, setSelect48]=useState({ name:null, value:null })
    const [ select49, setSelect49]=useState({ name:null, value:null })
    const [ select50, setSelect50]=useState({ name:null, value:null })
    const [ select51, setSelect51]=useState({ name:null, value:null })
    const [ select52, setSelect52]=useState({ name:null, value:null })
    const [ select53, setSelect53]=useState({ name:null, value:null })
    const [ select54, setSelect54]=useState({ name:null, value:null })
    const [ select55, setSelect55]=useState({ name:null, value:null })
    const [ select56, setSelect56]=useState({ name:null, value:null })
    const [ select57, setSelect57]=useState({ name:null, value:null })


    const handleChange=(e, setSelect) =>{
    setSelect({ name: e.target.name, value: e.target.value});
    //setSelect2({ name: e.target.name, value: e.target.value})
    };

    const store = async (e) => {

        const id_e=2
        try {
            console.log("comensee de llenar los select ");

        const requests = [
          {id_p:select1.name, id_e:id_e, Respuesta:select1.value      },
          {id_p:select2.name, id_e:id_e, Respuesta:select2.value      },
          {id_p:select3.name, id_e:id_e, Respuesta:select3.value      },
          {id_p:select4.name, id_e:id_e, Respuesta:select4.value      },
          {id_p:select5.name, id_e:id_e, Respuesta:select5.value      },
          {id_p:select6.name, id_e:id_e, Respuesta:select6.value      },
          {id_p:select7.name, id_e:id_e, Respuesta:select7.value      },
          {id_p:select8.name, id_e:id_e, Respuesta:select8.value      },
          {id_p:select9.name, id_e:id_e, Respuesta:select9.value      },
          {id_p:select10.name, id_e:id_e, Respuesta:select10.value      },
          {id_p:select11.name, id_e:id_e, Respuesta:select11.value      },
          {id_p:select12.name, id_e:id_e, Respuesta:select12.value      },
          {id_p:select13.name, id_e:id_e, Respuesta:select13.value      },
          {id_p:select14.name, id_e:id_e, Respuesta:select14.value      },
          {id_p:select15.name, id_e:id_e, Respuesta:select15.value      },
          {id_p:select16.name, id_e:id_e, Respuesta:select16.value      },
          {id_p:select17.name, id_e:id_e, Respuesta:select17.value      },
          {id_p:select18.name, id_e:id_e, Respuesta:select18.value      },
          {id_p:select19.name, id_e:id_e, Respuesta:select19.value      },
          {id_p:select20.name, id_e:id_e, Respuesta:select20.value      },
          {id_p:select21.name, id_e:id_e, Respuesta:select21.value      },
          {id_p:select22.name, id_e:id_e, Respuesta:select22.value      },
          {id_p:select23.name, id_e:id_e, Respuesta:select23.value      },
          {id_p:select24.name, id_e:id_e, Respuesta:select24.value      },
          {id_p:select25.name, id_e:id_e, Respuesta:select25.value      },
          {id_p:select26.name, id_e:id_e, Respuesta:select26.value      },
          {id_p:select27.name, id_e:id_e, Respuesta:select27.value      },
          {id_p:select28.name, id_e:id_e, Respuesta:select28.value      },
          {id_p:select29.name, id_e:id_e, Respuesta:select29.value      },
          {id_p:select30.name, id_e:id_e, Respuesta:select30.value      },
          {id_p:select31.name, id_e:id_e, Respuesta:select31.value      },
          {id_p:select32.name, id_e:id_e, Respuesta:select32.value      },
          {id_p:select33.name, id_e:id_e, Respuesta:select33.value      },
          {id_p:select34.name, id_e:id_e, Respuesta:select34.value      },
          {id_p:select35.name, id_e:id_e, Respuesta:select35.value      },
          {id_p:select36.name, id_e:id_e, Respuesta:select36.value      },
          {id_p:select37.name, id_e:id_e, Respuesta:select37.value      },
          {id_p:select38.name, id_e:id_e, Respuesta:select38.value      },
          {id_p:select39.name, id_e:id_e, Respuesta:select39.value      },
          {id_p:select40.name, id_e:id_e, Respuesta:select40.value      },
          {id_p:select41.name, id_e:id_e, Respuesta:select41.value      },
          {id_p:select42.name, id_e:id_e, Respuesta:select42.value      },
          {id_p:select43.name, id_e:id_e, Respuesta:select43.value      },
          {id_p:select44.name, id_e:id_e, Respuesta:select44.value      },
          {id_p:select45.name, id_e:id_e, Respuesta:select45.value      },
          {id_p:select46.name, id_e:id_e, Respuesta:select46.value      },
          {id_p:select47.name, id_e:id_e, Respuesta:select47.value      },
          {id_p:select48.name, id_e:id_e, Respuesta:select48.value      },
          {id_p:select49.name, id_e:id_e, Respuesta:select49.value      },
          {id_p:select50.name, id_e:id_e, Respuesta:select50.value      },
          {id_p:select51.name, id_e:id_e, Respuesta:select51.value      },
          {id_p:select52.name, id_e:id_e, Respuesta:select52.value      },
          {id_p:select53.name, id_e:id_e, Respuesta:select53.value      },
          {id_p:select54.name, id_e:id_e, Respuesta:select54.value      },
          {id_p:select55.name, id_e:id_e, Respuesta:select55.value      },
          {id_p:select56.name, id_e:id_e, Respuesta:select56.value      },
          {id_p:select57.name, id_e:id_e, Respuesta:select57.value      }
         ];
         console.log("terminerde llenar los select ");

         console.log("comienzo llenar los datos a base ");

         const responses = await Promise.all(requests.map(request =>
            axios.post(endpoint_E, request)
        ));

            console.log("termine de llenar datps");
            navigate("/home");
                          window.location.reload();

    } catch (error) {
        console.error(error);
        throw error;
      }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

       await verificarEncuesta();

        obtenerDatosDeAPI();

        try {
            await store(e);

        } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
    };




    return (

        <div id ="encuesta">


            <hr className="my-4"></hr>

            <form  onSubmit={handleFormSubmit}>
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
                        <tr className="active" id="1">
                            <td>1</td>
                            <td style={thStyle}>Seleccione el sexo del entrevistado<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="1" id="pregunta1_1" value="Masculino" checked={select1.value==="Masculino"}  onChange={(e) => handleChange(e, setSelect1)} />
                                    Masculino
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="1" id="pregunta1_2" value="Femenino" checked={select1.value==="Femenino"}  onChange={(e) => handleChange(e, setSelect1)}/>
                                    Femenino
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td style={thStyle}>¿Cuál es su edad?<label className="obligatorio">*</label></td>
                            <td>
                                <input type="number" name="2" id="pregunta2" value={select2.value}   onChange={ (e)=> handleChange(e, setSelect2)}  placeholder=" 18" />
                            </td>
                        </tr>
                        <tr className="active">
                            <td>3</td>
                            <td style={thStyle}>¿Cómo se llama la ocupación principal que usted desempeña?<label className="obligatorio">*</label></td>
                            <td>
                                <input type="text" name="3" id="pregunta3"  value={select3.value}  onChange={ (e)=> handleChange(e, setSelect3)}  placeholder="Campo Obligatorio" />
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td style={thStyle}>¿Qué actividad económica desarrolla el lugar donde trabaja?<label className="obligatorio">*</label></td>
                            <td>
                                <input type="text" name="4" id="pregunta4"  value={select4.value}  onChange={ (e)=> handleChange(e, setSelect4)}  placeholder="Campo Obligatorio" />
                            </td>
                        </tr>
                        <tr className="active" id="2">
                            <td>5</td>
                            <td style={thStyle}>¿En su trabajo cuántos trabajadores hay? Incluyéndose usted<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="5" id="pregunta5_1" value="1_a_9" checked={select5.value==="1_a_9"}  onChange={(e) => handleChange(e, setSelect5)}   />
                                    De 1 a 9
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="5" id="pregunta5_2" value="10_a_49" checked={select5.value==="10_a_49"}  onChange={(e) => handleChange(e, setSelect5)} />
                                    De 10 a 49
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="5" id="pregunta5_3" value="50_a_119" checked={select5.value==="50_a_119"}  onChange={(e) => handleChange(e, setSelect5)}  />
                                    De 50 a 119
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td style={thStyle}>¿Cuántas personas hay en su hogar? Incluyéndose usted<label className="obligatorio">*</label></td>
                            <td>
                                <input type="number" name="6" id="pregunta6" placeholder="45"  value={select6.value}  onChange={ (e)=> handleChange(e, setSelect6)} />
                            </td>
                        </tr>
                        <tr className="active">
                            <td>7</td>
                            <td style={thStyle}>¿Es usted el único en aportar económicamente en su hogar?<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="7" id="pregunta7_1" value="Si"  checked={select7.value==="Si"}  onChange={(e) => handleChange(e, setSelect7)} />
                                    Si
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="7" id="pregunta7_2" value="No"  checked={select7.value==="No"}  onChange={(e) => handleChange(e, setSelect7)}/>
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
                                    <input type="radio" name="8" id="pregunta8_1" value="Dueño" checked={select8.value==="Dueño"}  onChange={(e) => handleChange(e, setSelect8)} />
                                    1. Dueño
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="8" id="pregunta8_2" value="Asalariado" checked={select8.value==="Asalariado"} onChange={(e) => handleChange(e, setSelect8)}/>
                                    2. Asalariado (a) o contratado (a)
                                </div>
                            </td>
                        </tr>

                        <tr className="active">
                            <td>9</td>
                            <td style={thStyle}>En la actualidad su tipo de contrato es:<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="9" id="pregunta9_1" value="Indefinido" checked={select9.value==="Indefinido"} onChange={(e) => handleChange(e, setSelect9)}/>
                                    Indefinido
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="9" id="pregunta9_2" value="Temporal" checked={select9.value==="Temporal"} onChange={(e) => handleChange(e, setSelect9)}/>
                                    Temporal
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="9" id="pregunta9_3" value="No posee contrato" checked={select9.value==="No posee contrato"} onChange={(e) => handleChange(e, setSelect9)}/>
                                    No posee contrato
                                </div>
                            </td>
                        </tr>

                        <tr class="active"><td>10</td><td style={thStyle}>Solo si tiene contrato. ¿Firmo contrato escrito con su empleador?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="10" id="pregunta10_1" value="Si" checked={select10.value==="Si"} onChange={(e) => handleChange(e, setSelect10)} /> Si</div>
                            <div class='radioB'><input type="radio" name="10" id="pregunta10_2" value="No"  checked={select10.value==="No"} onChange={(e) => handleChange(e, setSelect10)}/> No </div>
                        </td></tr>
                        <tr><td>11</td><td style={thStyle}>¿Está usted asegurado como trabajador o tiene algún tipo de seguro social? <label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="11" id="pregunta11_1" value="Si" checked={select11.value==="Si"} onChange={(e) => handleChange(e, setSelect11)} /> Si</div>
                            <div class='radioB'><input type="radio" name="11" id="pregunta11_2" value="No" checked={select11.value==="No"} onChange={(e) => handleChange(e, setSelect11)}/> No </div>
                        </td></tr>

                        <tr class="active"><td>12</td><td style={thStyle}>¿Ha hecho uso de sus derechos sociales como trabajador?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'>  <input type="radio" name="12" id="pregunta12_1" value="Si"   checked={select12.value==="Si"} onChange={(e) => handleChange(e, setSelect12)}/> Si</div>
                            <div class='radioB'>  <input type="radio" name="12" id="pregunta12_2" value="No"  checked={select12.value==="No"} onChange={(e) => handleChange(e, setSelect12)}/> No </div>
                        </td></tr>
                        <tr ><td>13</td><td style={thStyle}>¿trabaja usted 40 o más horas a la semana?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="13" id="pregunta13_1" value="Si" checked={select13.value==="Si"} onChange={(e) => handleChange(e, setSelect13)}/> Si</div>
                            <div class='radioB'><input type="radio" name="13" id="pregunta13_2" value="No" checked={select13.value==="No"} onChange={(e) => handleChange(e, setSelect13)}/> No</div>
                        </td></tr>
                        <tr class="active"><td>14</td><td style={thStyle}>¿trabaja usted los 7 días de la semana?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="14" id="pregunta14_1" value="Si" checked={select14.value==="Si"}  onChange={(e) => handleChange(e, setSelect14)} /> Si</div>
                            <div class='radioB'> <input type="radio" name="14" id="pregunta14_2" value="No" checked={select14.value==="No"}  onChange={(e) => handleChange(e, setSelect14)} /> No</div>
                        </td></tr>



                        <tr className="active">
                            <td>15</td>
                            <td style={thStyle}>¿Qué tipo de jornada tiene en su trabajo?<label className="obligatorio">*</label></td>
                            <td>
                                <div className="radioB">
                                    <input type="radio" name="15" id="pregunta15_1" value="Horario Fijo"  checked={select15.value==="Horario Fijo"}  onChange={(e) => handleChange(e, setSelect15)} />
                                    Horario Fijo
                                </div>
                                <div className="radioB">
                                    <input type="radio" name="15" id="pregunta15_2" value="Horario Variable"  checked={select15.value==="Horario Variable"}  onChange={(e) => handleChange(e, setSelect15)}/>
                                    Horario Variable
                                </div>
                            </td>
                        </tr>


                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo - Higiene</td>
                        </tr>



                        <tr class="active"><td>16</td><td>¿En sus actividades diarias del trabajo con que frecuencias está expuesto(a) a sustancias químicas, gases, polvillos, gases?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_1" value="Toda jornada" checked={select16.value==="Toda jornada"}  onChange={(e) => handleChange(e, setSelect16)}/>1. Toda la jornada</div>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_2" value="Regularidad"  checked={select16.value==="Regularidad"}  onChange={(e) => handleChange(e, setSelect16)}/> 2. Con regularidad</div>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_3" value="Media Jornada" checked={select16.value==="Media Jornada"}  onChange={(e) => handleChange(e, setSelect16)}/>3. Menos de la mitad de la jornada</div>
                            <div class='radioB'><input type="radio" name="16" id="pregunta16_4" value="Nunca" checked={select16.value==="Nunca"} onChange={(e) => handleChange(e, setSelect16)}/> 4. Nunca</div>
                        </td></tr>

                        <tr ><td>17</td><td>¿En su lugar de trabajo está usted expuesto(a) o manipula
                            elementos infecciosos como, desechos, materiales de laboratorio, fluidos corporales, animales?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'>  <input type="radio" name="17" id="pregunta17_1" value="Si" checked={select17.value==="Si"}  onChange={(e) => handleChange(e, setSelect17)} /> Si</div>
                                <div class='radioB'><input type="radio" name="17" id="pregunta17_2" value="No" checked={select17.value==="No"} onChange={(e) => handleChange(e, setSelect17)} /> No</div>
                            </td></tr>
                        <tr class="active"><td>18</td><td>¿En su lugar de trabajo, a
                            menudo tiene que alzar el tono de voz para comunicarse?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="18" id="pregunta18_1" value="Si" checked={select18.value==="Si"} onChange={(e) => handleChange(e, setSelect18)}/> Si</div>
                                <div class='radioB'><input type="radio" name="18" id="pregunta18_2" value="No" checked={select18.value==="No"} onChange={(e) => handleChange(e, setSelect18)}/> No</div>
                            </td></tr>
                        <tr ><td>19</td><td>El ruido generado en su lugar de trabajo<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="19" id="pregunta19_1" value="Permite hablar con normalidad" checked={select19.value==="Permite hablar con normalidad"}  onChange={(e) => handleChange(e, setSelect19)}/>  Permite  hablar  con normalidad.</div>
                            <div class='radioB'><input type="radio" name="19" id="pregunta19_2" value="Requiere hablar en voz alta" checked={select19.value==="Requiere hablar en voz alta"}  onChange={(e) => handleChange(e, setSelect19)} /> Requiere  hablar en  voz alta.</div>
                            <div class='radioB'><input type="radio" name="19" id="pregunta19_3" value="Permite solo hablar a gritos"  checked={select19.value==="Permite solo hablar a gritos"}  onChange={(e) => handleChange(e, setSelect19)}/> Permite solo hablar a gritos.</div>
                            <div class='radioB'><input type="radio" name="19" id="pregunta19_4" value="No permite comunicarse" checked={select19.value==="No permite comunicarse"}   onChange={(e) => handleChange(e, setSelect19)}/> No permite comunicarse</div>

                        </td></tr>
                        <tr class="active"><td>20</td><td>¿En su lugar de trabajo está
                            usted expuesto a radiaciones como rayos x, radiactividad, luz de soldadura, láser?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="20" id="pregunta20_1" value="Si" checked={select20.value==="Si"}  onChange={(e) => handleChange(e, setSelect20)} /> Si</div>
                                <div class='radioB'><input type="radio" name="20" id="pregunta20_2" value="No"  checked={select20.value==="No"}  onChange={(e) => handleChange(e, setSelect20)}/> No</div>
                            </td></tr>
                        <tr ><td>21</td><td>¿En su lugar de trabajo está expuesto(a) a un ambiente muy caluroso?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'><input type="radio" name="21" id="pregunta21_1" value="Si"  checked={select21.value==="Si"}  onChange={(e) => handleChange(e, setSelect21)}/> Si</div>
                            <div class='radioB'><input type="radio" name="21" id="pregunta21_2" value="No"  checked={select21.value==="No"}  onChange={(e) => handleChange(e, setSelect21)}/> No</div>
                        </td></tr>
                        <tr class="active"><td>22</td><td>¿En su lugar de trabajo está expuesto(a) a un ambiente muy frío?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'><input type="radio" name="22" id="pregunta22_1" value="Si" checked={select22.value==="Si"}  onChange={(e) => handleChange(e, setSelect22)}/> Si</div>
                            <div class='radioB'><input type="radio" name="22" id="pregunta22_2" value="No" checked={select22.value==="No"}  onChange={(e) => handleChange(e, setSelect22)}/> No</div>
                        </td></tr>
                        <tr ><td>23</td><td>¿En su lugar de trabajo está expuesto(a) a vibraciones excesivas?<label class="obligatorio">*</label></td><td>
                            <div class='radioB'> <input type="radio" name="23" id="pregunta23_1" value="Si" checked={select23.value==="Si"}  onChange={(e) => handleChange(e, setSelect23)}/> Si</div>
                            <div class='radioB'><input type="radio" name="23" id="pregunta23_2" value="No" checked={select23.value==="No"}  onChange={(e) => handleChange(e, setSelect23)} /> No</div>
                        </td></tr>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo - Seguridad</td>
                        </tr>

                        <tr class="active"><td>24</td><td>¿En su lugar de trabajo con
                            qué frecuencia usted está expuesto(a) a superficies deslizantes, irregulares, inestables?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_1" value="Toda jornada" checked={select24.value==="Toda jornada"}  onChange={(e) => handleChange(e, setSelect24)} />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_2" value="Regularidad" checked={select24.value==="Regularidad"}  onChange={(e) => handleChange(e, setSelect24)} />   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_3" value="Media Jornada"checked={select24.value==="Media Jornada"} onChange={(e) => handleChange(e, setSelect24)}   />   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="24" id="pregunta24_4" value="Nunca"  checked={select24.value==="Nunca"} onChange={(e) => handleChange(e, setSelect24)}  />   4. Nunca</div>

                            </td></tr>
                        <tr ><td>25</td><td>¿En su lugar de trabajo en caso de haber huecos,
                            aberturas, escaleras, plataformas, desniveles existe señalización, protecciones, antideslizantes? <label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="25" id="pregunta25_1" value="Si" checked={select25.value==="Si"}  onChange={(e) => handleChange(e, setSelect25)} /> Si</div>
                                <div class='radioB'><input type="radio" name="25" id="pregunta25_2" value="No" checked={select25.value==="No"}  onChange={(e) => handleChange(e, setSelect25)} /> No</div>
                                <div class='radioB'><input type="radio" name="25" id="pregunta25_3" value="No Aplica" checked={select25.value==="No Aplica"}  onChange={(e) => handleChange(e, setSelect25)} /> No Aplica</div>
                            </td></tr>
                        <tr class="active"><td>26</td><td>¿Con que frecuencia está
                            expuesto a objetos con temperaturas extremas?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_1" value="Toda jornada" checked={select26.value==="Toda jornada"}  onChange={(e) => handleChange(e, setSelect26)} />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_2" value="Regularidad" checked={select26.value==="Regularidad"}  onChange={(e) => handleChange(e, setSelect26)}/>   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_3" value="Media Jornada" checked={select26.value==="Media Jornada"}  onChange={(e) => handleChange(e, setSelect26)}/>   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="26" id="pregunta26_4" value="Nunca" checked={select26.value==="Nunca"}  onChange={(e) => handleChange(e, setSelect26)}/>   4. Nunca</div>

                            </td></tr>
                        <tr ><td>27</td><td>¿En las actividades de su trabajo tiene que usar alguna
                            máquina o herramienta?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="27" id="pregunta27_1" value="Si"  checked={select27.value==="Si"}  onChange={(e) => handleChange(e, setSelect27)}/> Si</div>
                                <div class='radioB'><input type="radio" name="27" id="pregunta27_2" value="No"  checked={select27.value==="No"}  onChange={(e) => handleChange(e, setSelect27)}/> No</div>
                            </td></tr>
                        <tr class="active"><td>28</td><td>¿En su actividad de trabajo es
                            posible que se genere golpes por objetos inmóviles?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="28" id="pregunta28_1" value="Si"  checked={select28.value==="Si"}  onChange={(e) => handleChange(e, setSelect28)} /> Si</div>
                                <div class='radioB'><input type="radio" name="28" id="pregunta28_2" value="No"  checked={select28.value==="No"}  onChange={(e) => handleChange(e, setSelect28)}/> No</div>
                            </td></tr>
                        <tr ><td>29</td><td>¿En su actividad de trabajo es posible que se genere golpes
                            por objetos móviles?<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="29" id="pregunta29_1" value="Si"  checked={select29.value==="Si"}  onChange={(e) => handleChange(e, setSelect29)}/> Si</div>
                                <div class='radioB'><input type="radio" name="29" id="pregunta29_2" value="No"  checked={select29.value==="No"}  onChange={(e) => handleChange(e, setSelect29)}/> No</div>
                            </td></tr>
                        <tr class="active"><td>30</td><td>¿En su actividad de trabajo se
                            desprende o salpica algún tipo de material?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'><input type="radio" name="30" id="pregunta30_1" value="Si" checked={select30.value==="No"}  onChange={(e) => handleChange(e, setSelect30)} /> Si</div>
                                <div class='radioB'><input type="radio" name="30" id="pregunta30_2" value="No" checked={select30.value==="No"}  onChange={(e) => handleChange(e, setSelect30)} /> No</div>
                            </td></tr>
                        <tr ><td>31</td><td>¿En su actividad de trabajo
                            considera que puede existir atrapamiento entre usted y cualquier objeto?<label class="obligatorio">*</label>
                        </td><td> <div class='radioB'><input type="radio" name="31" id="pregunta31_1" value="Si" checked={select31.value==="No"}  onChange={(e) => handleChange(e, setSelect31)} /> Si</div>
                                <div class='radioB'><input type="radio" name="31" id="pregunta31_2" value="No" checked={select31.value==="No"}  onChange={(e) => handleChange(e, setSelect31)} /> No</div></td></tr>
                        <tr class="active"><td>32</td><td>¿Las herramientas que usa en
                            sus actividades laborales pueden generarle golpes o cortes en su cuerpo?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'><input type="radio" name="32" id="pregunta32_1" value="Si" checked={select32.value==="No"}  onChange={(e) => handleChange(e, setSelect32)}/> Si</div>
                                <div class='radioB'><input type="radio" name="32" id="pregunta32_2" value="No" checked={select32.value==="No"}  onChange={(e) => handleChange(e, setSelect32)}/> No</div></td></tr>
                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo - Ergonómicas</td>
                        </tr>


                        <tr ><td>33</td><td>¿En su lugar de trabajo con
                            qué frecuencia usted realiza actividades donde tiene que mantener posturas incómodas? <label class="obligatorio">*</label></td><td>
                                <div class='radioB'> <input type="radio" name="33" id="pregunta33_1" value="Toda jornada" checked={select33.value==="Toda jornada"}  onChange={(e) => handleChange(e, setSelect33)} />   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="33" id="pregunta33_2" value="Regularidad" checked={select33.value==="Regularidad"}  onChange={(e) => handleChange(e, setSelect33)}/>   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="33" id="pregunta33_3" value="Media Jornada" checked={select33.value==="Media Jornada"}  onChange={(e) => handleChange(e, setSelect33)}/>   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="33" id="pregunta33_4" value="Nunca" checked={select33.value==="Nunca"}  onChange={(e) => handleChange(e, setSelect33)}/>   4. Nunca</div>

                            </td></tr>
                        <tr class="active"><td>34</td><td>¿En las actividades de su
                            trabajo usted levanta, o trasladas cargas pesadas (objetos, animales, personas)?<label class="obligatorio">*</label></td><td>

                                <div class='radioB'> <input type="radio" name="34" id="pregunta34_1" value="Si" checked={select34.value==="Si"}  onChange={(e) => handleChange(e, setSelect34)} /> Si</div>
                                <div class='radioB'><input type="radio" name="34" id="pregunta34_2" value="No" checked={select34.value==="No"}  onChange={(e) => handleChange(e, setSelect34)} /> No</div>
                            </td></tr>
                        <tr ><td>35</td><td>¿En las actividades de su trabajo realiza usted movimientos repetitivos
                            con sus extremidades? <label class="obligatorio">*</label></td><td>

                                <div class='radioB'><input type="radio" name="35" id="pregunta35_1" value="Si" checked={select35.value==="Si"}  onChange={(e) => handleChange(e, setSelect35)} /> Si</div>
                                <div class='radioB'><input type="radio" name="35" id="pregunta35_2" value="No" checked={select35.value==="No"}  onChange={(e) => handleChange(e, setSelect35)}/> No</div>
                            </td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Demanda)</td>
                        </tr>


                        <tr class="active"><td>36</td><td>¿A menudo usted realiza
                            tareas difíciles o complejas en su trabajo?<label class="obligatorio">*</label>
                        </td><td> <div class='radioB'><input type="radio" name="36" id="pregunta36_1" value="Si" checked={select36.value==="Si"}  onChange={(e) => handleChange(e, setSelect36)}/> Si</div>
                                <div class='radioB'><input type="radio" name="36" id="pregunta36_2" value="No" checked={select36.value==="No"}  onChange={(e) => handleChange(e, setSelect36)}/> No</div>
                            </td></tr>
                        <tr ><td>37</td><td>¿Sus actividades requieren de
                            gran esfuerzo y concentración?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="37" id="pregunta37_1" value="Si" checked={select37.value==="Si"}  onChange={(e) => handleChange(e, setSelect37)}/> Si</div>
                                <div class='radioB'><input type="radio" name="37" id="pregunta37_2" value="No" checked={select37.value==="No"}  onChange={(e) => handleChange(e, setSelect37)}/> No</div></td></tr>
                        <tr class="active"><td>38</td><td>¿En su trabajo se ve
                            obligado(a) a esconder sus emociones?<label class="obligatorio">*</label>
                        </td><td><div class='radioB'><input type="radio" name="38" id="pregunta38_1" value="Si" checked={select38.value==="Si"}  onChange={(e) => handleChange(e, setSelect38)}/> Si</div>
                                <div class='radioB'><input type="radio" name="38" id="pregunta38_2" value="No" checked={select38.value==="No"}  onChange={(e) => handleChange(e, setSelect38)}/> No</div></td></tr>
                        <tr ><td>39</td><td>¿En su trabajo con qué
                            frecuencia tiene que acelerar el ritmo en la ejecución de
                            tareas?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="39" id="pregunta39_1" value="Toda jornada" checked={select39.value==="Toda jornada"}  onChange={(e) => handleChange(e, setSelect39)}/>   1. Toda la jornada</div>
                                <div class='radioB'><input type="radio" name="39" id="pregunta39_2" value="Regularidad" checked={select39.value==="Regularidad"}  onChange={(e) => handleChange(e, setSelect39)}/>   2. Con regularidad</div>
                                <div class='radioB'><input type="radio" name="39" id="pregunta39_3" value="Media Jornada" checked={select39.value==="Media Jornada"}  onChange={(e) => handleChange(e, setSelect39)}/>   3. Menos de la mitad de la jornada</div>
                                <div class='radioB'><input type="radio" name="39" id="pregunta39_4" value="Nunca" checked={select39.value==="Nunca"}  onChange={(e) => handleChange(e, setSelect39)}/>   4. Nunca</div>
                            </td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Control)  </td>
                        </tr>
                        <tr class="active"><td>40</td><td>¿La ocupación que tiene le
                            permite desarrollar sus
                            habilidades y destrezas?<label class="obligatorio">*</label>
                        </td><td>
                                <div class='radioB'> <input type="radio" name="40" id="pregunta40_1" value="Si" checked={select40.value==="Si"}  onChange={(e) => handleChange(e, setSelect40)} /> Si</div>
                                <div class='radioB'><input type="radio" name="40" id="pregunta40_2" value="No" checked={select40.value==="No"}  onChange={(e) => handleChange(e, setSelect40)}/> No</div></td></tr>
                        <tr ><td>41</td><td>¿En su trabajo tiene la
                            posibilidad de hacer aquello
                            en lo que se destaca?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="41" id="pregunta41_1" value="Si" checked={select41.value==="Si"}  onChange={(e) => handleChange(e, setSelect41)} /> Si</div>
                                <div class='radioB'><input type="radio" name="41" id="pregunta41_2" value="No" checked={select41.value==="No"}  onChange={(e) => handleChange(e, setSelect41)} /> No</div></td></tr>
                        <tr class="active"><td>42</td><td>¿En su trabajo puede
                            organizar o cambiar el orden
                            de sus tareas?<label class="obligatorio">*</label></td><td><div class='radioB'><input type="radio" name="42" id="pregunta42_1" value="Si" checked={select42.value==="Si"}  onChange={(e) => handleChange(e, setSelect42)}/> Si</div>
                                <div class='radioB'><input type="radio" name="42" id="pregunta42_2" value="No" checked={select42.value==="No"}  onChange={(e) => handleChange(e, setSelect42)}/> No</div></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Apoyo social)</td>
                        </tr>

                        <tr ><td>43</td><td>Si tiene superiores o jefes
                            ¿Ha notado interés de su jefe
                            por el bienestar de sus
                            trabajadores?<label class="obligatorio">*</label>
                        </td><td> <div class='radioB'><input type="radio" name="43" id="pregunta43_1" value="Si" checked={select43.value==="Si"}  onChange={(e) => handleChange(e, setSelect43)} /> Si</div>
                                <div class='radioB'><input type="radio" name="43" id="pregunta43_2" value="No" checked={select43.value==="No"}  onChange={(e) => handleChange(e, setSelect43)}/> No</div>
                                <div class='radioB'><input type="radio" name="43" id="pregunta43_3" value="No Aplica" checked={select43.value==="No Aplica"}  onChange={(e) => handleChange(e, setSelect43)}/> No Aplica</div></td></tr>
                        <tr class="active"><td>44</td><td>En caso de tener compañeros
                            de trabajo, ¿Se ayudan
                            mutuamente?<label class="obligatorio">*</label> </td><td><div class='radioB'><input type="radio" name="44" id="pregunta44_1" value="Si"  checked={select44.value==="Si"}  onChange={(e) => handleChange(e, setSelect44)}/> Si</div>
                                <div class='radioB'><input type="radio" name="44" id="pregunta44_2" value="No"  checked={select44.value==="No"}  onChange={(e) => handleChange(e, setSelect44)} /> No</div>
                                <div class='radioB'><input type="radio" name="44" id="pregunta44_3" value="No Aplica"  checked={select44.value==="No Aplica"}  onChange={(e) => handleChange(e, setSelect44)}/> No Aplica</div></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Condiciones de trabajo – Psicosocial (Recompensa)</td>
                        </tr>

                        <tr ><td>45</td><td>¿Dónde usted trabaja tiene la
                            posibilidad de mejorar en su
                            carrera profesional?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="45" id="pregunta45_1" value="Si" checked={select45.value==="Si"}  onChange={(e) => handleChange(e, setSelect45)}/> Si</div>
                                <div class='radioB'><input type="radio" name="45" id="pregunta45_2" value="No" checked={select45.value==="No"}  onChange={(e) => handleChange(e, setSelect45)}/> No</div></td></tr>
                        <tr class="active"><td>46</td><td>¿Considera usted que su
                            trabajo es estable?<label class="obligatorio">*</label>
                        </td><td><div class='radioB'><input type="radio" name="46" id="pregunta46_1" value="Si" checked={select46.value==="Si"}  onChange={(e) => handleChange(e, setSelect46)}/> Si</div>
                                <div class='radioB'><input type="radio" name="46" id="pregunta46_2" value="No" checked={select46.value==="No"}  onChange={(e) => handleChange(e, setSelect46)}/> No</div></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Salud ocupacional</td>
                        </tr>
                        <tr ><td>47</td><td>En general como percibe su
                            salud:<label class="obligatorio">*</label></td><td>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_1" value="Estable" checked={select47.value==="Estable"}  onChange={(e) => handleChange(e, setSelect47)}/>   1. Estable</div>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_2" value="Regular" checked={select47.value==="Regular"}  onChange={(e) => handleChange(e, setSelect47)}/>   2. Regular</div>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_3" value="Inestable" checked={select47.value==="Inestable"}  onChange={(e) => handleChange(e, setSelect47)}/>   3. Inestable</div>
                                <div class='radioB'><input type="radio" name="47" id="pregunta47_4" value="Pesima"    checked={select47.value==="Pesima"}  onChange={(e) => handleChange(e, setSelect47)}/>   4. Pésima</div>
                            </td></tr>
                        <tr class="active"><td>48</td><td>¿Ha tenido dificultad en
                            concentrarse, dormir o en recordar las cosas?<label class="obligatorio">*</label></td><td><div class='radioB'>
                                <input type="radio" name="48" id="pregunta48_1" value="Si" checked={select48.value==="Si"}  onChange={(e) => handleChange(e, setSelect48)} /> Si</div>
                                <div class='radioB'><input type="radio" name="48" id="pregunta48_2" value="No" checked={select48.value==="No"}  onChange={(e) => handleChange(e, setSelect48)}/> No</div></td></tr>
                        <tr ><td>49</td><td>Ultimadamente ha tenido usted estos síntomas<label class="obligatorio">*</label>
                        </td><td><div class='radioB'>
                            <input type="radio" name="49" id="pregunta49_1" value="Olvida con facilidad y le cuesta recordar" checked={select49.value==="Olvida con facilidad y le cuesta recordar"}  onChange={(e) => handleChange(e, setSelect49)}/>  Olvida con facilidad y le cuesta recordar</div>
                                <div class='radioB'>
                                    <input type="radio" name="49" id="pregunta49_2" value="Tiene en mente los problemas del trabajo" checked={select49.value==="Tiene en mente los problemas del trabajo"}  onChange={(e) => handleChange(e, setSelect49)}/>  Tiene en mente los problemas del trabajo</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_3" value="Cambia de ánimo muy seguido" checked={select49.value==="Cambia de ánimo muy seguido"}  onChange={(e) => handleChange(e, setSelect49)}/>    Cambia de ánimo muy seguido</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_4" value="Se siente alterado o tenso" checked={select49.value==="Se siente alterado o tenso"}  onChange={(e) => handleChange(e, setSelect49)} />   Se siente alterado o tenso</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_5" value="Dificultad para dormir" checked={select49.value==="Dificultad para dormir"}  onChange={(e) => handleChange(e, setSelect49)}/>  Dificultad para dormir</div>
                                <div class='radioB'><input type="radio" name="49" id="pregunta49_6" value="Pierde la concentración con facilidad" checked={select49.value==="Pierde la concentración con facilidad"}  onChange={(e) => handleChange(e, setSelect49)}/> Pierde la concentración con facilidad</div>
                            </td></tr>
                        <tr class="active"><td>50</td><td>¿En los últimos meses ha tenido algún tipo de lesión por motivo de su trabajo?
                            <label class="obligatorio">*</label></td><td><div class='radioB'><input type="radio" name="50" id="pregunta50_1" value="Si" checked={select50.value==="Si"}  onChange={(e) => handleChange(e, setSelect50)}/> Si</div>
                                <div class='radioB'><input type="radio" name="50" id="pregunta50_2" value="No" checked={select50.value==="Si"}  onChange={(e) => handleChange(e, setSelect50)}/> No</div></td></tr>
                        <tr ><td>51</td><td>¿Le han diagnosticado algún tipo de enfermedad o se encuentra en el proceso de
                            reconocimiento de una enfermedad profesional? <label class="obligatorio">*</label></td><td><div class='radioB'><input type="radio" name="51" id="pregunta51_1" value="Si" checked={select51.value==="Si"}  onChange={(e) => handleChange(e, setSelect51)}/> Si</div>
                                <div class='radioB'><input type="radio" name="51" id="pregunta51_2" value="No" checked={select51.value==="Si"}  onChange={(e) => handleChange(e, setSelect51)}/> No</div></td></tr>
                        <tr class="active"><td>52</td><td>En caso de haber tenido un accidente de trabajo ¿Cuánto tiempo estuvo en reposo?
                            (Escriba el total de días) </td><td><input type="number" name="52" id="pregunta52" placeholder="Opcional" rows="90" cols="90" size="65" value={select52.value}  onChange={ (e)=> handleChange(e, setSelect52)} /></td></tr>

                        <tr colSpan="3" className="info" style={{ color: 'black' }}>
                            <td colSpan="3" style={{ textAlign: 'center' }}>Recursos y Actividades preventivas</td>
                        </tr>

                        <tr ><td>53</td><td>¿En su lugar de trabajo le han
                            informado acerca de los riesgos laborales presentes y
                            las medidas que debe tomar?<label class="obligatorio">*</label></td><td> <div class='radioB'>  <input type="radio" name="53" id="pregunta53_1" value="Si" checked={select53.value==="Si"}  onChange={(e) => handleChange(e, setSelect53)}/> Si</div>
                                <div class='radioB'><input type="radio" name="53" id="pregunta53_2" value="No" checked={select53.value==="No"}  onChange={(e) => handleChange(e, setSelect53)}/> No </div></td></tr>
                        <tr class="active"><td>54</td><td>¿En su trabajo tiene a su
                            disposición los equipos de protección personal? <label class="obligatorio">*</label></td><td><div class='radioB'>  <input type="radio" name="54" id="pregunta54_1" value="Si" checked={select54.value==="Si"}  onChange={(e) => handleChange(e, setSelect54)}/> Si</div>
                                <div class='radioB'><input type="radio" name="54" id="pregunta54_2" value="No" checked={select54.value==="No"}  onChange={(e) => handleChange(e, setSelect54)}/> No </div>
                                <div class='radioB'>  <input type="radio" name="54" id="pregunta54_3" value="No Aplica"  checked={select54.value==="No Aplica"}  onChange={(e) => handleChange(e, setSelect54)}/> No Aplica</div></td></tr>
                        <tr class="active"><td>55</td><td>¿En el lugar donde trabaja
                            existe algún tipo de servicio en prevención de riesgos
                            laborales o de salud ocupacional?<label class="obligatorio">*</label></td><td><div class='radioB'>  <input type="radio" name="55" id="pregunta55_1" value="Si"  checked={select55.value==="Si"}  onChange={(e) => handleChange(e, setSelect55)}/> Si</div>
                                <div class='radioB'><input type="radio" name="55" id="pregunta55_2" value="No"  checked={select55.value==="No"}  onChange={(e) => handleChange(e, setSelect55)}/> No </div>
                                <div class='radioB'>  <input type="radio" name="55" id="pregunta55_3" value="Desconoce"  checked={select55.value==="Desconoce"}  onChange={(e) => handleChange(e, setSelect55)}/> Desconoce</div></td></tr>
                        <tr ><td>56</td><td>¿Existe algún comité o un
                            grupo organizado para la higiene y seguridad de los
                            trabajadores en su lugar de trabajo?<label class="obligatorio">*</label></td><td><div class='radioB'>  <input type="radio" name="56" id="pregunta56_1" value="Si"  checked={select56.value==="Si"}  onChange={(e) => handleChange(e, setSelect56)} /> Si</div>
                                <div class='radioB'><input type="radio" name="56" id="pregunta56_2" value="No"  checked={select56.value==="No"}  onChange={(e) => handleChange(e, setSelect56)}/> No </div>
                                <div class='radioB'>  <input type="radio" name="56" id="pregunta56_3" value="Desconoce"  checked={select56.value==="Desconoce"}  onChange={(e) => handleChange(e, setSelect56)}/> Desconoce</div></td></tr>
                        <tr class="active"><td>57</td><td>En los últimos meses ¿Ha
                            sido participe de la identificación de peligros?<label class="obligatorio">*</label>
                        </td><td><div class='radioB'>  <input type="radio" name="57" id="pregunta57_1" value="Si"  checked={select57.value==="Si"}  onChange={(e) => handleChange(e, setSelect57)}/> Si</div>
                                <div class='radioB'><input type="radio" name="57" id="pregunta57_2" value="No"  checked={select57.value==="No"}  onChange={(e) => handleChange(e, setSelect57)}/> No </div>
                                <div class='radioB'>  <input type="radio" name="57" id="pregunta57_3" value="Desconoce"  checked={select57.value==="Desconoce"}  onChange={(e) => handleChange(e, setSelect57)}/> Desconoce</div></td></tr>
                    </tbody>
                </table>
                 {mostrarAlerta && <AlertComponent />}
                  {mostrarAlerta_A && <AlertCompSuccefull />}
                <div className="card" style={{ marginLeft: '3%', marginRight: '3%' }}>
                    <div className="card-header">
                        Envío de Encuesta
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: 'black' }}>Finalizar Encuesta sobre la Seguridad Industrial en los Talleres</h5>
                        <p className="card-text">Recuerde responder todas las preguntas.</p>
                        <button type="submit" id="Enviar"   className="btn btn-primary">Finalizar Encuesta</button>
                    </div>
                </div>


            </form>

        </div>


);
}

export default Encuesta_E;
