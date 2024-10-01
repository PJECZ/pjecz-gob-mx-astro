export interface WebPaginas {
    success: boolean;
    message: string;
    total:   number;
    items:   Item[];
    limit:   number;
    offset:  number;
}

export interface Item {
    clave:              string;
    titulo:             string;
    resumen:            string;
    ruta:               string;
    fecha_modificacion: Date;
    responsable:        null;
    etiquetas:          string;
    vista_previa:       string;
    estado:             Estado;
}

export enum Estado {
    Publicar = "PUBLICAR",
}
