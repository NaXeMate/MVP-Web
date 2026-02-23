export type Libro = {
  id: number;
  titulo: string;
  autor: string;
  descripcion: string;
  sinopsis: string;
  portada: string;
  paginas: number;
};

export type Pokemon = {
  id: number;
  numPokedex: number;
  imageUrl: string;
  nombre: string;
  descripcion: string;
  tipos: {
    tipo1: string;
    tipo2?: string;
  };
  habilidades: {
    habilidad1: string;
    habilidad2?: string;
    habilidadOculta?: string;
    habilidadEspecial?: string;
  };
  formaRegional: boolean;
  megaevolucion1: boolean | string;
  megaevolucion2: boolean | string;
  megaevolucion3: boolean | string;
  legendario: boolean;
  singular: boolean;
};

export type InteractiveBookProps = {
  pdfUrl?: string;
};
