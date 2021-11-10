// Метод выполняет запрос и преобразует ответ в JSON в общем виде Response

export abstract class HttpHelper {
    public static fetchAsJson<estateResponse>(input: RequestInfo, init?: RequestInit): Promise<estateResponse> {
      return fetch(input, init)
      .then((response) => {
        return response.text()
      })
      .then<estateResponse>((responseText) => {
        return JSON.parse(responseText)
      })
    }
  }