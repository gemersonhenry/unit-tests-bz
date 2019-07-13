/**
 * Formato de RESPONSE genéricos
 */

export interface IGlobalSuccessfulResponse<DataModel> {
  status: number;
  data?: DataModel; // depende del BODY de la respuesta
}

export interface IGlobalErrorResponse<ErrorModel> {
  status: number;
  error?: ErrorModel; // debe ser personalizado
}

/**
 * Formato de ErrorResponse
 */

export interface IErrorResponseModel {
  errorMessage: string;
}
