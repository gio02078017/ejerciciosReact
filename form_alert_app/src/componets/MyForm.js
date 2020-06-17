import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormikTextField } from 'formik-material-fields';
import { FormikSelectField } from 'formik-material-fields';
import { 
    Button,
    Typography,
    Grid,
  } from "@material-ui/core";

  import { styles } from "./styles";


export const MyForm  = props => {

    const classes = styles();
    const nameSujeto = "sujeto"
    const nameTipoSujeto = "tipoSujeto"
    const nameTipoAlerta = "tipoAlerta"
    const nameCategoria = "categoria"
    const nameAlerta = 'alerta'
    const nameLinea = "linea"
    const nameEvento = "evento"
    const nameMedicion = "mecanismoMedicion"
    const nameEventoMedicion = "eventoMedicion"
    const nameParametro = "parametro"
    const nameTipoVehiculo = "tipoVehiculo"
    const nameProtocoloAtencion = "protocoloAtencion"
    const nameCargarProtocolo = "cargarProtocolo"
    const nameURLProtocolo = "URLProtocolo"

    const [sujetoState, setSujeto] = useState([
        { label: 'Todos', value: 'todos' },
        { label: 'Ruta', value: 'ruta' },
        { label: 'Identificación del Servicio', value: 'Identificacion del Servicio' },
    ]);
    const [controlSujeto, setControlSujeto] = useState(false);
    const [tipoSujetoState, setTipoSujeto] = useState([
        { label: 'Todos', value: 'todos' },
        { label: 'Ruta', value: 'ruta' },
        { label: 'Identificación del Servicio', value: 'Identificacion del Servicio' },
    ]);
    const [tipoAlertaState, setTipoAlerta] = useState([
        { label: 'Operativa', value: 'operativa' },
        { label: 'HSE', value: 'HSE' },
    ]);

    const [categoriaState, setCategoria] = useState([
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
    ]);
    const [lineaState, setLinea] = useState([
        { label: 'Carga Seca', value: 'Carga Seca' },
        { label: 'Carga Liquida', value: 'Carga Liquida' },
        { label: 'Personas', value: 'Personas' },
        { label: 'Todas', value: 'Todas' },
    ]);
    const [eventoState, setEvento] = useState([
        { label: 'Llegada', value: 'Llegada' },
        { label: 'Salida', value: 'Salida' },
        { label: 'Cargue', value: 'Cargue' },
        { label: 'Descargue', value: 'Descargue' },
        { label: 'En transito', value: 'En transito' },
        { label: 'Todas', value: 'Todas' },
    ]);
    const [mecanismoMedicionState, setMecanismoMedicion] = useState([
        { label: 'Ubicación', value: 'Ubicación' },
        { label: 'Telemetría', value: 'Telemetría' },
        { label: 'Cambio de Estado', value: 'Cambio de Estado' },
    ]);
    const [eventoMedicionState, setEventoMedicion] = useState([
        { label: 'Detenido', value: 'Detenido' },
        { label: 'Dentro', value: 'Dentro' },
        { label: 'Fuera', value: 'Fuera' },
        { label: 'Aproximación', value: 'Aproximación' },
        { label: 'Detención por Tiempo', value: 'Detención por Tiempo' },
    ]);
    const [parametroState, setParametro] = useState([
        { label: 'Tiempo', value: 'Tiempo' },
        { label: 'Radio', value: 'Radio' },
        { label: 'Geocerca', value: 'Geocerca' },
        { label: 'Distancia', value: 'Distancia' },
        { label: 'Punto de Control', value: 'Punto de Control' },
    ]);
    const [tipoVehiculoState, setTipoVehiculo] = useState([
        { label: 'Camion', value: 'Camion' },
        { label: 'Carro', value: 'Carro' },
        { label: 'Elipcotero', value: 'Elipcotero' },
    ]);
    const [protocoloAtencion, setProtocoloAtencion] = useState([
        { label: 'SI', value: 'SI' },
        { label: 'NO', value: 'NO' },
    ]);
    const [CargarProtocolo, setCargarProtocolo] = useState("");
    const [URLProtocolo, setURLProtocolo] = useState("");
    
    const validationSchema = Yup.object().shape({
        sujeto: Yup.string().required("el sujeto es requerido"),
        tipoSujeto: controlSujeto ? Yup.string().required("el tipo sujeto es requerido"): null,
        tipoAlerta: Yup.string().required("el tipo alerta es requerido"),
        categoria: Yup.string().required("el campo es requerido"),
        alerta: Yup.string().required("el campo es requerido"),
        linea:Yup.string().required("el campo es requerido"),
        evento:Yup.string().required("el campo es requerido"),
        mecanismoMedicion:Yup.string().required("el campo es requerido"),
        eventoMedicion:Yup.string().required("el campo es requerido"),
        parametro:Yup.string().required("el campo es requerido"),
        tipoVehiculo:Yup.string().required("el campo es requerido"),
        protocoloAtencion:Yup.string().required("el campo es requerido"),
        cargarProtocolo:Yup.string().required("el campo es requerido"),
        URLProtocolo:Yup.string().required("el campo es requerido"),
      });
      
      const initialValues = {
        sujeto: '',
        tipoSujeto: '',  
        tipoAlerta: '',
        categoria: '',
        alerta:'',
        linea:'',
        evento:'',
        mecanismoMedicion:'',
        eventoMedicion:'',
        parametro:'',
        tipoVehiculo:'',
        protocoloAtencion:'SI',
        cargarProtocolo:'',
        URLProtocolo:'dfdddd',
      };

      const handleChange = (e) => {
        const {value, name } = e.target;
        switch(name){
            case 'sujeto':
                if(value == "ruta" || value == "Identificación del Servicio"){
                    setControlSujeto(true)
                }else{
                    setControlSujeto(false)
                }
            break;    
        }        


        console.log("key", e.target.name);
        console.log("value", e.target.value);
      }

      return (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={fields => {
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4)) 
          }}
        >
          {({ isValid }) => (

            <Form autoComplete="off">
              
            <div className={classes.container} justifyContent="center">                   
                <Grid
                    item
                    container
                    xs={12}
                    direction="column"
                    justify="flex-start"
                    justifyContent="center"
                    className={classes.scrollContainer}
                >
                    <FormikSelectField
                        name={nameSujeto}
                        label="*Sujeto"
                        margin="normal"
                        onChange={ handleChange}
                        options={sujetoState}
                        fullWidth
                    />
                    {controlSujeto ? (
                        <FormikSelectField
                        name={nameTipoSujeto}
                        label="*TipoSujeto"
                        margin="normal"
                        onChange={ handleChange}
                        options={tipoSujetoState}
                        fullWidth
                    />
                    ):null}
                    <FormikSelectField
                        name={nameTipoAlerta}
                        label="*Tipo de alerta"
                        margin="normal"
                        onChange={ handleChange}
                        options={tipoAlertaState}
                        fullWidth
                    />
                    <FormikSelectField
                        name={nameCategoria}
                        label="*Categoría"
                        margin="normal"
                        onChange={ handleChange}
                        options={categoriaState}
                        fullWidth
                    />    
                    <FormikTextField
                        name={nameAlerta}
                        label="*Nombre Alerta"
                        margin="normal"
                        fullWidth
                        onChange={ handleChange}
                    />
                    <FormikSelectField
                        name={nameLinea}
                        label="*Línea"
                        margin="normal"
                        onChange={ handleChange}
                        options={lineaState}
                        fullWidth
                    />
                    <FormikSelectField
                        name={nameEvento}
                        label="*Evento"
                        margin="normal"
                        onChange={ handleChange}
                        options={eventoState}
                        fullWidth
                    /> 
                    <FormikSelectField
                        name={nameMedicion}
                        label="*Mecanismo medición"
                        margin="normal"
                        onChange={ handleChange}
                        options={mecanismoMedicionState}
                        fullWidth
                    /> 
                    <FormikSelectField
                        name={nameEventoMedicion}
                        label="*Evento Medición"
                        margin="normal"
                        onChange={ handleChange}
                        options={eventoMedicionState}
                        fullWidth
                    /> 
                    <FormikSelectField
                        name={nameParametro}
                        label="*Parámetro"
                        margin="normal"
                        onChange={ handleChange}
                        options={parametroState}
                        fullWidth
                    /> 
                    <FormikSelectField
                        name={nameTipoVehiculo}
                        label="*Tipo de Vehículo"
                        margin="normal"
                        onChange={ handleChange}
                        options={tipoVehiculoState}
                        fullWidth
                    /> 
                    <FormikSelectField
                        name={nameProtocoloAtencion}
                        label="Protocolo de Atención"
                        margin="normal"
                        onChange={ handleChange}
                        options={protocoloAtencion}
                        fullWidth
                    />
                    <FormikTextField
                        name={nameCargarProtocolo}
                        label="Cargar Protocolo"
                        margin="normal"
                        fullWidth
                        onChange={ handleChange}
                    />
                    <FormikTextField
                        name={nameURLProtocolo}
                        label="URL Protocolo"
                        margin="normal"
                        fullWidth
                        onChange={ handleChange}
                    /> 
                </Grid>
                <Grid>
                    <Button
                            variant="contained"
                            id="buttonSend"
                            type="submit"
                            disabled={!isValid}
                            classes={{
                            root: classes.buttonGuardarStyles,
                            label: classes.buttonTextGuardar                    
                            }}
                            //onClick={props.handleExecuteFiltros}
                        >
                        Guardar
                        </Button>
                        <Button
                            variant="outlined"
                            classes={{
                            root: classes.buttonCancelarStyles,
                            label: classes.buttonTextCancelar
                            }}
                        >
                            Cancelar
                        </Button>
                </Grid>
              </div>
            </Form>
          )}
        </Formik>
      );
}