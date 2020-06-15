import React, { useState} from "react";
import {
    Input,
    Slider,
    Select,
    InputLabel,
    FormControl,
    Button,
    Typography,
    TextField,
    Grid,
    MenuItem,
    ListItemText,
    Checkbox,
    Box
  } from "@material-ui/core";

  import { styles } from "./styles";

export const FormAlert = props => {

    const nameSubjecto = "subjecto"
    const nameTipoSubjecto = "tipoSubjecto"
    const nameTipoAlerta = "tipoAlerta"
    const nameCategoria = "categoria"
    const nameLinea = "linea"
    const nameEvento = "evento"
    const nameMedicion = "mecanismoMedicion"
    const nameEventoMedicion = "eventoMedicion"
    const nameParametro = "parametro"
    const nameTipoVehiculo = "tipoVehiculo"
    const nameProtocoloAtencion = "protocoloAtencion"
    const nameCargarProtocolo = "cargarProtocolo"
    const nameURLProtocolo = "URLProtocolo"

    
    const classes = styles();
    const [subjecto, setSubjecto] = useState("");
    const [tipoAlerta, setTipoAlerta] = useState("");
    const [controlSubjecto, setControlSubjecto] = useState(false);
    const [tipoSubjecto, setTipoSubjecto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [linea, setLinea] = useState("");
    const [evento, setEvento] = useState("");
    const [mecanismoMedicion, setMecanismoMedicion] = useState("");
    const [eventoMedicion, setEventoMedicion] = useState("");
    const [parametro, setParametro] = useState("");
    const [tipoVehiculo, setTipoVehiculo] = useState("");
    const [protocoloAtencion, setProtocoloAtencion] = useState("");
    const [CargarProtocolo, setCargarProtocolo] = useState("");
    const [URLProtocolo, setURLProtocolo] = useState("");

    const handleOnSelectChange = (e, key) => {
        switch(key){
            case nameSubjecto:
                setSubjecto(e.target.value)
                if(e.target.value == "ruta" || e.target.value == "Identificación del Servicio"){
                    setControlSubjecto(true)
                }else{
                    setControlSubjecto(false)
                }
                break;
            case nameTipoAlerta:
                setTipoAlerta(e.target.value)
                break;
            case nameTipoSubjecto:
                setTipoSubjecto(e.target.value)
                break;      
            case nameCategoria:
                setCategoria(e.target.value)
                break;      
            case nameLinea:
                setLinea(e.target.value)
                break;      
            case nameEvento:
                setEvento(e.target.value)
                break;      
            case nameMedicion:
                setMecanismoMedicion(e.target.value)
                break;      
            case nameEventoMedicion:
                setEventoMedicion(e.target.value)
                break;      
            case nameParametro:
                setParametro(e.target.value)
                break;      
            case nameTipoVehiculo:
                setTipoVehiculo(e.target.value)
                break;      
            case nameProtocoloAtencion:
                setProtocoloAtencion(e.target.value)
                break;      
        }
      };

    
    const handleTextInputOnChange = (e, key ) => {
       console.log("key", key);
    }

    return (
        <div>
            <Grid container direction={"column"} justify="flex-start">
                <div className={classes.container}>                   
                    <Grid
                        item
                        container
                        xs={4}
                        direction="column"
                        justify="flex-start"
                        justifyContent="center"
                        className={classes.scrollContainer}
                    >

                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="sujeto_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Sujeto
                            </InputLabel>
                            <Select
                                native
                                value= {subjecto}
                                onChange={e =>  handleOnSelectChange(e, nameSubjecto) }
                                inputProps={{
                                    name: {nameSubjecto},
                                    id: "sujeto_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value="">Todos</option>
                                <option value="ruta">Ruta</option>
                                <option value="Identificación del Servicio">Identificación del Servicio</option>
                            </Select>
                        </FormControl>
                        {controlSubjecto ? (
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="tipoSujeto_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *TipoSujeto
                            </InputLabel>
                            <Select
                                native
                                value= {tipoSubjecto}
                                onChange={e =>  handleOnSelectChange(e, nameTipoSubjecto) }
                                inputProps={{
                                    name: {nameTipoSubjecto},
                                    id: "tipo_subjecto_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value="">Todos</option>
                                <option value="ruta">Ruta</option>
                                <option value="Identificación del Servicio">Identificación del Servicio</option>
                            </Select>
                        </FormControl>
                        ):null}
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="tipo_carga_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Tipo de alerta
                            </InputLabel>
                            <Select
                                native
                                value= {tipoAlerta}
                                onChange={e =>  handleOnSelectChange(e, nameTipoAlerta) }
                                inputProps={{
                                    name: {nameTipoAlerta},
                                    id: "tipoAlerta_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="operativa">Operativa</option>
                                <option value="hse">HSE</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="tipo_carga_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Categoría:
                            </InputLabel>
                            <Select
                                native
                                value= {categoria}
                                onChange={e =>  handleOnSelectChange(e, nameCategoria) }
                                inputProps={{
                                    name: {nameCategoria},
                                    id: "categoria_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                            label="*Nombre Alerta"
                            style={{ margin: 1 }}
                            placeholder="Ingrese el nombre de la alerta..."
                            margin="normal"
                            //disabled={tipo_mapa === "completa" ? true : false}
                            //value={props.filtros.id_vehiculo}
                            InputLabelProps={{
                                shrink: "true",
                                classes: {
                                root: classes.inputLabel
                                }
                            }}
                            onChange={e => {
                                handleTextInputOnChange(e, "nombreAlerta");
                            }}
                            inputProps={{
                                name: "nombreAlerta",
                                id: "nombreAlerta",
                                classes: {
                                root: classes.inputPlaceHolder
                                }
                            }}
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="tipo_carga_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Línea
                            </InputLabel>
                            <Select
                                native
                                value= {linea}
                                onChange={e =>  handleOnSelectChange(e, nameLinea) }
                                inputProps={{
                                    name: {nameLinea},
                                    id: "linea_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="Carga Seca">Carga Seca</option>
                                <option value="Carga Liquida">Carga Liquida</option>
                                <option value="Personas">Personas</option>
                                <option value="Todas">Todas</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="evento_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Evento
                            </InputLabel>
                            <Select
                                native
                                value= {evento}
                                onChange={e =>  handleOnSelectChange(e, nameEvento) }
                                inputProps={{
                                    name: {nameEvento},
                                    id: "evento_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="Llegada">Llegada</option>
                                <option value="Salida">Salida</option>
                                <option value="Cargue">Cargue</option>
                                <option value="Descargue">Descargue</option>
								<option value="En transito">En transito</option>
								<option value="Todos">Todos</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="mecanismo_medicion_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Mecanismo medición
                            </InputLabel>
                            <Select
                                native
                                value= {mecanismoMedicion}
                                onChange={e =>  handleOnSelectChange(e, nameMedicion) }
                                inputProps={{
                                    name: {nameMedicion},
                                    id: "mecanismo_medicion_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="Ubicación">Ubicación</option>
                                <option value="Telemetría">Telemetría</option>
                                <option value="Cambio de Estado">Cambio de Estado</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="evento_medicion_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Evento Medición:
                            </InputLabel>
                            <Select
                                native
                                value= {eventoMedicion}
                                onChange={e =>  handleOnSelectChange(e, nameEventoMedicion) }
                                inputProps={{
                                    name: {nameEventoMedicion},
                                    id: "evento_medicion_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="Detenido">Detenido</option>
                                <option value="Dentro">Dentro</option>
                                <option value="Fuera">Fuera</option>
								<option value="Aproximación">Aproximación</option>
								<option value="Detención por Tiempo">Detención por Tiempo</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="parametro_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Parámetro
                            </InputLabel>
                            <Select
                                native
                                value= {parametro}
                                onChange={e =>  handleOnSelectChange(e, nameParametro) }
                                inputProps={{
                                    name: {nameParametro},
                                    id: "parametro_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="Tiempo">Tiempo</option>
                                <option value="Radio">Radio</option>
                                <option value="Geocerca">Geocerca</option>
								<option value="Distancia">Distancia</option>
								<option value="Punto de Control">Punto de Control</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="tipoVehiculo_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            *Tipo de Vehículo:
                            </InputLabel>
                            <Select
                                native
                                value= {tipoVehiculo}
                                onChange={e =>  handleOnSelectChange(e, nameTipoVehiculo) }
                                inputProps={{
                                    name: {nameTipoVehiculo},
                                    id: "tipoVehiculo_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="Camion">Camion</option>
                                <option value="Carro">Carro</option>
                                <option value="Elipcotero">Elipcotero</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel
                            shrink="true"
                            htmlFor="protocolo_atencion_select"
                            classes={{ root: classes.inputLabel }}
                            >
                            Protocolo de Atención
                            </InputLabel>
                            <Select
                                native
                                value= {protocoloAtencion}
                                onChange={e =>  handleOnSelectChange(e, nameProtocoloAtencion) }
                                inputProps={{
                                    name: {nameProtocoloAtencion},
                                    id: "protocolo_atencion_select",
                                    classes: {
                                    root: classes.inputPlaceHolder
                                    }
                                }}
                                //disabled={tipo_mapa === "completa" ? true : false}
                                >
                                <option value=""></option>
                                <option value="SI">SI</option>
                                <option value="NO">NO</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                            label="Cargar Protocolo"
                            style={{ margin: 1 }}
                            placeholder="Carge aqui el archivo del protocolo..."
                            margin="normal"
                            //disabled={tipo_mapa === "completa" ? true : false}
                            //value={props.filtros.id_vehiculo}
                            InputLabelProps={{
                                shrink: "true",
                                classes: {
                                root: classes.inputLabel
                                }
                            }}
                            onChange={e => {
                                handleTextInputOnChange(e, nameCargarProtocolo);
                            }}
                            inputProps={{
                                name: {nameCargarProtocolo},
                                id: nameCargarProtocolo,
                                classes: {
                                root: classes.inputPlaceHolder
                                }
                            }}
                            />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <TextField
                            label="URL Protocolo"
                            style={{ margin: 1 }}
                            placeholder="Ingrese la url donde almace el protocolo..."
                            margin="normal"
                            //disabled={tipo_mapa === "completa" ? true : false}
                            //value={props.filtros.id_vehiculo}
                            InputLabelProps={{
                                shrink: "true",
                                classes: {
                                root: classes.inputLabel
                                }
                            }}
                            onChange={e => {
                                handleTextInputOnChange(e, nameURLProtocolo);
                            }}
                            inputProps={{
                                name:{nameURLProtocolo},
                                id: {nameURLProtocolo},
                                classes: {
                                root: classes.inputPlaceHolder
                                }
                            }}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={4} mt={2} pt={2}>                         
                        <Button
                            variant="contained"
                            id="buttonSend"
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
            </Grid>
        </div>
    )    
}
