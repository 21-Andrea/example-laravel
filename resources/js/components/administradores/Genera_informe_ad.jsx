import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, Page, Document, PDFViewer, StyleSheet, Image } from '@react-pdf/renderer';
import sello from '../../../assets/img/sello-instituto.png';
const endpoint = 'http://localhost:8000/api/administrador';
import UserCreationDate from './UserCreationDate';

const styles = StyleSheet.create({

    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },

    container: {
        maxWidth: 'auto',
        margin: 'auto',
        padding: 20,
    },
    companyHeader: {

        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
        height: 50, // Establecer la altura según tus necesidades
        width: '100%', // Establecer el ancho al 100% del contenedor principal


    },
    companyHeaderImg: {
        maxHeight: 100,
        marginLeft: 20,
        height: 30, // Establecer la altura según tus necesidades
        width: '30%', // Establecer el ancho al 100% del contenedor principal
        alignSelf: 'center',
        alignItems: 'center',
    },

    header: {
        marginTop: 19,
        marginBottom: 20,
        border: '1px solid #888',
        padding: '5px 50px 5px 50px',
        borderRadius: 10,
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
    },

    headerContent: {


    },
    headerText: {
        fontSize: 15,
        alignSelf: 'center',
    },
    table: {
        height: 50, // Establecer la altura según tus necesidades
        width: '100%', // Establecer el ancho al 100% del contenedor principal

        fontSize: '10px',
        borderCollapse: 'collapse',
        border: '1px solid #8a8a8a',
        margin: '0 0 4px 0',
        borderRadius: 5,
        flexDirection: 'row',
    },
    tableRow: {
        border: '1px solid #8a8a8a',
        padding: 5,
        backgroundColor: '#d6d6d6',

    },
    tableCell: {
        border: '1px solid #8a8a8a',
        padding: 5,

    },
    body: {
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: 20,
        border: '1px solid #888',
        padding: '5px 50px 20px 50px',
        borderRadius: 10,
        maxHeight: '100%',
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
    },
    bodyText: {
        fontSize: 10, // Tamaño de la fuente en react-pdf
        letterSpacing: 0.7, // Espaciado entre caracteres en react-pdf
        lineHeight: 1.5, // Altura de línea en react-pdf
        marginBottom: 10, // Espaciado inferior entre líneas
    },
    hr: {
        borderBottom: '1px solid #000',
        margin: '10px 0',
    },
    footer: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 12,
        color: '#888',
        padding: 20,
        borderRadius: 10,
        border: '1px solid #888',
        boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
    },
    footerText: {
        margin: 0,
        fontSize: 10,
    },
});

const styles_T = StyleSheet.create({
    table: {
        width: '100%', // Establecer el ancho al 100% del contenedor principal

        fontSize: '10px',
        borderCollapse: 'collapse',
        border: '1px solid #8a8a8a',
        margin: '0 0 4px 0',
        marginTop:10,
        borderRadius: 5,
        padding: 5,
    },
    tableRow: {
        flexDirection: 'row',
        border: '1px solid #8a8a8a',
        padding: 5,

    },
    tableCell: {
        border: '1px solid #8a8a8a',
        padding: 5,
        fontSize: 12,
        width: 100,

    },
    headerCell: {
        backgroundColor: '#d6d6d6',
        fontSize: 12,
        border: '1px solid #8a8a8a',
        padding: 5,
    },
});
/*
  const history = useNavigate();

    const [administrador, setAdministrador] = useState([]);
    useEffect(() => {
        getAllAdministrador();
    }, []);

    const getAllAdministrador = async () => {
        const response = await axios.get(endpoint);
        setAdministrador(response.data);
    };*/

const Genera_informe_ad = () => {

    //const history = useNavigate();

    const [administrador, setAdministrador] = useState([]);
    useEffect(() => {
        getAllAdministrador();
    }, []);

    const getAllAdministrador = async () => {
        const response = await axios.get(endpoint);
        setAdministrador(response.data);
    };
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

    return (
        <Document style={{ width: '100%', height: '100vh' }}>
            <Page style={styles.container}>
                <View style={styles.companyHeader}>

                    <Image src={sello} style={styles.companyHeaderImg} />
                </View>




                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerText}>Instituto Superior Tecnologico Carlos Cisneros</Text>
                        <View>
                            <View style={styles.table}>

                                <View style={styles.tableRow}>
                                    <View style={styles.tableCell}>
                                        <Text>Direccion: La Paz 07 – 56 y México</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>Teléfono: 096 980 5367 - Administrativas:032944818 </Text>
                                    </View>
                                </View>

                                <View style={styles.tableRow}>
                                    <View style={styles.tableCell}>
                                        <Text>Direccion:Riobamba - Ecuador. </Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text>Correo: itscarloscisneros@hotmail.com </Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>Informe: Respuesta de evaluaciones</Text>
                    <View style={styles.hr} />
                    <Text style={styles.bodyText}>-- Objetivo --</Text>
                    <Text style={styles.bodyText}>Con la realización de las encuestas se tiene como objetivo principal poder implementar de manera eficiente medidas de seguridad industrial aplicadas a las carreras profesionales que requieren de estos parámetros para con llevar una educación de calidad</Text>
                    <Text style={styles.bodyText}>-- Aplicación --</Text>
                    <Text style={styles.bodyText}>En el instituto superior tecnológico "Carlos Cisneros" se ha notado que requiere la implementación de las normas de seguridad industrial debido a las carreras que necesitan de estos estándares de seguridad como: Mecánica Automotriz, Electromecánica o Mecánica Industrial. Esto asegurará el desarrollo de los estudiantes al trabajar en instalaciones reguladas de forma segura evitando incidentes</Text>



                    <View>
                        <table style={styles_T.table}>
                            <tr style={styles_T.tableRow}>
                                <th style={{ ...styles_T.tableCell, ...styles_T.headerCell }}>
                                    <Text>ID</Text>
                                </th>
                                <th style={{ ...styles_T.tableCell, ...styles_T.headerCell }}>
                                    <Text>Nombre</Text>
                                </th>
                                <th style={{ ...styles_T.tableCell, ...styles_T.headerCell }}>
                                    <Text>Contraseña</Text>
                                </th>
                                <th style={{ ...styles_T.tableCell, ...styles_T.headerCell }}>
                                    <Text>Número de Cédula</Text>
                                </th>
                                <th style={{ ...styles_T.tableCell, ...styles_T.headerCell }}>
                                    <Text>Fecha Creación</Text>
                                </th>
                            </tr>
                            {administrador.map((admin) => (
                                <tr style={styles_T.tableRow} key={admin.id}>
                                    <td style={styles_T.tableCell}>
                                        <Text>{admin.id}</Text>
                                    </td>
                                    <td style={styles_T.tableCell}>
                                        <Text>{admin.username}</Text>
                                    </td>
                                    <td style={styles_T.tableCell}>
                                        <Text>{"*************"}</Text>
                                    </td>
                                    <td style={styles_T.tableCell}>
                                        <Text>{admin.cedula_U}</Text>
                                    </td>
                                    <td style={styles_T.tableCell}>
                                        <Text>{formatDate(admin.created_at)}</Text>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Instituto Superior Tecnologico Carlos Cisneros © Derechos reservados 2023 - 2024</Text>
                    <Text style={styles.footerText}>Mecánica Industrial - Mecánica Automotriz - Electromecánica</Text>
                </View>



            </Page>
        </Document>
    );
};

export default Genera_informe_ad;
