export interface WebPagina {
    success:            boolean;
    message:            string;
    clave:              string;
    titulo:             string;
    resumen:            string;
    ruta:               string;
    fecha_modificacion: Date;
    responsable:        null;
    etiquetas:          string;
    vista_previa:       string;
    estado:             Estado;
    contenido:          string;
}

export enum Estado {
    Publicar = "PUBLICAR",
}
