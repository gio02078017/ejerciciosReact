import React, { useState } from 'react';
import { 
    Button,
    Grid,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel 
  } from "@material-ui/core";
  import Autocomplete from '@material-ui/lab/Autocomplete';
  import PropTypes from 'prop-types'
  import { styles } from "./styles";
  import Asynchronous from './Asynchronous'
  import GoogleMaps from './GoogleMaps'


export const MyForm2  = ({lineOptions, subjectOptions, routesOrServiceIdOptions, 
    typeAlertOptions, categoryOptions, stateOptions, alertClassOptions, eventOptions, 
    parameterOptions, typeVehicleOptions, attentionProtocol, selectDistanceOptions, selectTimeOptions }) => {

    const classes = styles();
    const nameSubject = "subject"
    const nameRoutes = "routes"
    const nameServiceId = "serviceId"
    const nameTypeAlert = "typeAlert"
    const nameCategory = "category"
    const nameAlert = 'alerta'
    const nameLine = "linea"
    const nameState = "state"
    const nameclassAlert = "nameAlertClass"
    const nameEvent = "event"
    const nameParameter = "parameter"
    const nameReference = "reference"
    const nameTime = "time"
    const nameStartTime = "startTime"
    const nameEndTime = "endTime"
    const nameTypeVehicle = "classVehicle"
    const nameAttentionProtocol = "attentionProtocol"
    const nameloadProtocol = "loadProtocol"
    const nameURLProtocol = "URLProtocol"
    const nameTextFieldMoreInformation = "textFieldInformation"
    const nameSelectMoreInformation = "selectInformation"

    const [valueField, setValueFiled] = useState({
        subject: '',
        tipoSujeto: '',  
        tipoAlerta: '',
        categoria: '',
        alerta:'',
        line:'',
        evento:'',
        mecanismoMedicion:'',
        eventoMedicion:'',
        parametro:'',
        tipoVehiculo:'',
        protocoloAtencion:'SI',
        cargarProtocolo:'',
        URLProtocolo:'dfdddd',
      })

      const [labelField, setLabelFiled] = useState({
        subject: '*Sujeto',
        routes:"*Rutas",
        serviceId:"*Identificadores del servicio",
        typeSubject: '*TipoSujeto',  
        typeAlert: '*Tipo de alerta',
        category: '*Categoría',
        alert:'*Nombre Alerta',
        line:'*Línea',
        state:'*Estado',
        classAlert:'*Clase de alerta',
        event:'*Evento',
        parameter:'*Parámetro',
        reference:'*Referencia',
        rank: "Rango",
        time: "Hora",
        startTime: "Hora Inicial",
        endTime: "Hora Final",
        typeVehicle:'*Tipo de Vehículo',
        attentionProtocol:'Protocolo de Atención',
        loadProtocol:'Cargar Protocolo',
        URLProtocol:'URL Protocolo',
        selectDistance:"Seleccione la medida de distancia",
        selectTime: "Seleccione el medida de tiempo"
      })
      
      const [placeHolderField, setPlaceHolderField] = useState({
        routes:"Rutas",
        serviceId:"Identificadores del servicio",
      })    

    const [controlSubject, setControlSubject] = useState(false);
    const [controlRangle, setControlRangle] = useState(false);
    const [controlTime, setControlTime] = useState(false);
    const [controlInformation, setControlInformation] = useState(false);
    const [fieldRoutesOrServiceId, setRoutesOrServiceId] = useState({
        name: "",
        label: "",
        placeholder:""
    });

    const [fieldMoreInformation, setMoreInformation] = useState({
        labelTextField: "",
        placeholderTextField:"",
        labelSelect: ""
    });

    const [moreInformationOptions, setMoreInformationOptions] = useState([]);

    const fillRoutesOrServiceId = (value) => {
         if(value == "routes"){
            setRoutesOrServiceId({
                name: nameRoutes,
                label: labelField.routes,
                placeholder: placeHolderField.routes
            }) 
         }else{
            setRoutesOrServiceId({
                name: nameServiceId,
                label: labelField.serviceId,
                placeholder: placeHolderField.serviceId
            })
         }
    } 
    
    const fillMoreInformation = (value) => {
        if(value == "Distancia"){
           setMoreInformation({
               labelTextField: value,
               placeholderTextField: "",
               labelSelect: labelField.selectDistance
           })
           setMoreInformationOptions(selectDistanceOptions)
        }else{
            setMoreInformation({
                labelTextField: value,
                placeholderTextField: "",
                labelSelect: labelField.selectTime
            })
            setMoreInformationOptions(selectTimeOptions)
        } 
    }
      
    const handleChange = (e) => {
        const {value, name } = e.target;
        switch(name){
            case nameSubject:
                if(value == "routes" || value == "servicesId"){
                    setControlSubject(true)
                    fillRoutesOrServiceId(value)
                }else{
                    setControlSubject(false)
                }
            break;    
            case nameParameter:
                setControlRangle(false)
                setControlTime(false)
                setControlInformation(false)
                
                if(value == "Hora"){
                    setControlTime(true)
                }else if(value == "Rango"){
                    setControlRangle(true) 
                }else if(value == "Distancia"){
                    setControlInformation(true)
                    fillMoreInformation(value) 
                }else if(value == "Tiempo"){
                    setControlInformation(true) 
                    fillMoreInformation(value) 
                }                    
            break;
            default:    
        }

        console.log("key", e.target.name);
        console.log("value", e.target.value);
      }

      return (
            <form autoComplete="off">
              
            <div className={classes.container}>                   
                <Grid
                    item
                    container
                    xs={12}
                    direction="column"
                    justify="flex-start"
                    className={classes.scrollContainer}
                >
                    <Asynchronous/>
                    <GoogleMaps/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameLine}>{labelField.line}</InputLabel>
                        <Select
                            labelId={nameLine}
                            name={nameLine}
                            label={labelField.line}
                            onChange={ handleChange}
                            
                            fullWidth
                        >
                            {
                                lineOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameSubject}>{labelField.subject}</InputLabel>
                        <Select
                            labelId={nameSubject}
                            name={nameSubject}
                            label={labelField.subject}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                subjectOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                        </Select>
                    </FormControl>
                    {controlSubject ? (
                        <Autocomplete
                            multiple
                            id={fieldRoutesOrServiceId.name}
                            name={fieldRoutesOrServiceId.name}
                            options={routesOrServiceIdOptions}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                variant="standard"
                                label={fieldRoutesOrServiceId.label}
                                placeholder={fieldRoutesOrServiceId.placeholder}
                                />
                            )}
                        />
                    ):null}
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameTypeAlert}>{labelField.typeAlert}</InputLabel>  
                        <Select
                            labelId={nameTypeAlert}
                            name={nameTypeAlert}
                            label={labelField.typeAlert}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                typeAlertOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameCategory}>{labelField.category}</InputLabel>  
                        <Select
                            labelId={nameCategory}
                            name={nameCategory}
                            label={labelField.category}
                            onChange={ handleChange}
                            fullWidth
                        >  
                            {
                                categoryOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>  
                    <TextField
                        name={nameAlert}
                        label={labelField.alert}
                        margin="normal"
                        fullWidth
                        onChange={ handleChange}
                    />
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameTypeAlert}>{labelField.state}</InputLabel>  
                        <Select
                            labelId={nameState}
                            name={nameState}
                            label={labelField.state}
                             onChange={ handleChange}
                            fullWidth
                        >
                            {
                                stateOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameclassAlert}>{labelField.classAlert}</InputLabel>   
                        <Select
                            labelId={nameclassAlert}
                            name={nameclassAlert}
                            label={labelField.classAlert}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                alertClassOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameEvent}>{labelField.event}</InputLabel>   
                        <Select
                            labelId={nameEvent}
                            name={nameEvent}
                            label={labelField.event}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                eventOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameParameter}>{labelField.parameter}</InputLabel>   
                        <Select
                            labelId={nameParameter}
                            name={nameParameter}
                            label={labelField.parameter}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                parameterOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            } 
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameReference}>{labelField.reference}</InputLabel>  
                        <Select
                            labelId={nameReference}
                            name={nameReference}
                            label={labelField.reference}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                parameterOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }   
                        </Select>
                    </FormControl>
                    { controlRangle ? (
                        <div>
                            <InputLabel id={nameReference} justify="start">Rango</InputLabel>
                            <Grid container justify="space-around">
                                <TextField
                                    id={nameStartTime}
                                    name={nameStartTime}
                                    label={labelField.startTime}
                                    type="time"
                                    defaultValue=""
                                    style={{ margin: 3 }}
                                    variant="filled"
                                    className={classes.textFieldSmall}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                                />
                                <TextField                            
                                    id={nameEndTime}
                                    name={nameEndTime}
                                    label={labelField.endTime}
                                    type="time"
                                    defaultValue=""
                                    style={{ margin: 3 }}
                                    variant="filled"
                                    className={classes.textFieldSmall}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 300, // 5 min
                                    }}
                                />
                            </Grid>
                        </div>
                    ): null}
                    { controlTime ? (
                    <TextField
                        id={nameTime}
                        name={nameTime}
                        label={labelField.time}
                        type="time"
                        defaultValue=""
                        style={{ margin: 3 }}
                        variant="filled"
                        className={classes.textFieldToHundred}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
                    ): null}
                    {  controlInformation ? (
                    <div>
                        <InputLabel id={nameReference} justify="start">{fieldMoreInformation.labelTextField}</InputLabel>
                        <Grid container justify="space-around">
                            <TextField
                                id={nameTextFieldMoreInformation}
                                name={nameTextFieldMoreInformation}
                                label={fieldMoreInformation.labelTextField}
                                type="number"
                                defaultValue=""
                                variant="filled"
                                className={classes.textFieldSmall}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <FormControl className={classes.formControlSmall}>
                                <InputLabel id={nameSelectMoreInformation}>{fieldMoreInformation.labelSelect}</InputLabel> 
                                <Select
                                    labelId={nameSelectMoreInformation}
                                    name={nameSelectMoreInformation}
                                    label={fieldMoreInformation.labelSelect}
                                    variant="filled"
                                    onChange={ handleChange}
                                >
                                    {
                                        moreInformationOptions.map((item) => (
                                            <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                        ))
                                    }   
                            </Select>
                            </FormControl>
                        </Grid>
                    </div>
                    ): null}
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameTypeVehicle}>{labelField.typeVehicle}</InputLabel>   
                        <Select
                            labelId={nameTypeVehicle}
                            name={nameTypeVehicle}
                            label={labelField.typeVehicle}
                              onChange={ handleChange}
                            fullWidth
                        >
                            {
                                typeVehicleOptions.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }   
                        </Select>
                    </FormControl> 
                    <FormControl className={classes.formControl}>
                        <InputLabel id={nameAttentionProtocol}>{labelField.attentionProtocol}</InputLabel>  
                        <Select
                            labelId={nameAttentionProtocol}
                            name={nameAttentionProtocol}
                            label={labelField.attentionProtocol}
                            onChange={ handleChange}
                            fullWidth
                        >
                            {
                                attentionProtocol.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <TextField
                        name={nameloadProtocol}
                        label={labelField.loadProtocol}
                        margin="normal"
                        fullWidth
                        onChange={ handleChange}
                    />
                    <TextField
                        name={nameURLProtocol}
                        label={labelField.URLProtocol}
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
            </form>
          );
}

MyForm2.prototypes ={
    lineOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    subjectOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    routesOrServiceIdOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    typeAlertOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    categoryOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    stateOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    alertClassOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    eventOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    parameterOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    typeVehicleOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    attentionProtocolOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    selectDistanceOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
    selectTimeOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    ),
}

MyForm2.defaultProps ={
    lineOptions :[        
        { label: 'Carga Seca', value: 'Carga Seca' },
        { label: 'Carga Liquida', value: 'Carga Liquida' },
        { label: 'Personas', value: 'Personas' },
        { label: 'Todas', value: 'Todas' },
    ],
    subjectOptions :[        
        { label: 'Todos', value: 'todos' },
        { label: 'Ruta', value: 'routes' },
        { label: 'Identificación del Servicio', value: 'servicesId' },
    ],
    routesOrServiceIdOptions:[
        { label: 'Carga Seca', value: 'Carga Seca' },
        { label: 'Carga Liquida', value: 'Carga Liquida' },
        { label: 'Personas', value: 'Personas' },
        { label: 'Todas', value: 'Todas' },
        { label: 'Todos', value: 'todos' },
        { label: 'Ruta', value: 'routes' },
        { label: 'Identificación del Servicio', value: 'servicesId' },
    ],
    typeAlertOptions:[
        { label: 'Operativa', value: 'operativa' },
        { label: 'HSE', value: 'HSE' },
    ],
    categoryOptions: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
    ],
    stateOptions:[
        { label: 'Llegada', value: 'Llegada' },
        { label: 'Salida', value: 'Salida' },
        { label: 'Cargue', value: 'Cargue' },
        { label: 'Descargue', value: 'Descargue' },
        { label: 'En transito', value: 'En transito' },
        { label: 'Todas', value: 'Todas' },
    ],
    alertClassOptions:[
        { label: 'Ubicación', value: 'Ubicación' },
        { label: 'Telemetría', value: 'Telemetría' },
        { label: 'Cambio de Estado', value: 'Cambio de Estado' },
    ],
    eventOptions:[
        { label: 'Detenido', value: 'Detenido' },
        { label: 'Dentro', value: 'Dentro' },
        { label: 'Fuera', value: 'Fuera' },
        { label: 'Aproximación', value: 'Aproximación' },
        { label: 'Detención por Tiempo', value: 'Detención por Tiempo' },
    ],
    parameterOptions:[
        { label: 'Hora', value: 'Hora' },
        { label: 'Tiempo', value: 'Tiempo' },
        { label: 'Radio', value: 'Radio' },
        { label: 'Rango Horario', value: 'Rango' },
        { label: 'Geocerca', value: 'Geocerca' },
        { label: 'Distancia', value: 'Distancia' },
        { label: 'Punto de Control', value: 'Punto de Control' },
    ],
    typeVehicleOptions: [
        { label: 'Camion', value: 'Camion' },
        { label: 'Carro', value: 'Carro' },
        { label: 'Elipcotero', value: 'Elipcotero' },
    ],
    attentionProtocol: [
        { label: 'SI', value: 'SI' },
        { label: 'NO', value: 'NO' }, 
    ],
    selectDistanceOptions: [
        { label: 'Metros', value: 'mtr' },
        { label: 'Kilómetros', value: 'klm' }, 
    ],
    selectTimeOptions: [
        { label: 'Horas', value: 'hh' },
        { label: 'Minutos', value: 'mm' }, 
        { label: 'Segundos', value: 'ss' }, 
    ]  
}