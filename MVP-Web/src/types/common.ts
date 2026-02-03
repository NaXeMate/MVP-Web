export type Libro = {
    id: number;
    titulo: string;
    autor: string;
    descripcion: string;
    portada: string;
    paginas: number;
};

export type LibroResumen = Pick<Libro, 'id' | 'titulo' | 'autor' | 'portada'>;
