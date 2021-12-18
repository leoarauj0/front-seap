import { api } from "./api";
import ILotacaoData from "../types/lotacao.type";

class LotacaoDataService {
  getAll() {
    return api.get<Array<ILotacaoData>>("/lotacoes");
  }

  get(id: string) {
    return api.get<ILotacaoData>(`/lotacoes/${id}`);
  }

  create(data: ILotacaoData) {
    return api.post<ILotacaoData>("/lotacoes", data);
  }

  update(id: any, data: ILotacaoData) {
    return api.put<any>(`/lotacoes/${id}`, data);
  }

  delete(id: any) {
    return api.delete<any>(`/lotacoes/${id}`);
  }

  deleteAll() {
    return api.delete<any>(`/lotacoes`);
  }

  findByTitle(nome: string) {
    return api.get<Array<ILotacaoData>>(`/lotacoes?nome=${nome}`);
    console.log(nome);
  }
}

export default new LotacaoDataService();
