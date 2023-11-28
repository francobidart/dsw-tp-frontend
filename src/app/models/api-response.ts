export interface ApiResponse<T> {
  status: string;
  mensaje: string;
  total_resultados: number;
  resultados: T[];
}
