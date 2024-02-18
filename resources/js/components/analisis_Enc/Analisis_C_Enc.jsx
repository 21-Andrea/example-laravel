import React from 'react';
import Plot from 'react-plotly.js';

// Object.entries(const)
class Analisis_C_Enc extends React.Component {



    constructor(props) {
        super(props);
        this.state = {data: [], layout: {}, frames: [], config: {}};
      }

    render() {
        const plotStyle = {
          width: 450,
          height: 450,
          backgroundColor: 'lightgray',
          border: '4px solid black',


        };


    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{ title: 'A Fancy Plot'}}

        config = {{ showLink: true,   showEditInChartStudio: true,  plotlyServerURL: "https://chart-studio.plotly.com",  responsive: true,  linkText: 'Editar Grafico'}   }
        style={plotStyle} // Aquí aplicamos el estilo al componente Plot

      />
    );
  }
}
export default Analisis_C_Enc
