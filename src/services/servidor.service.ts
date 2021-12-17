import { api } from "./api";
import IServidorData from "../types/servidor.type";

class ServidorDataService {
  getAll() {
    return api.get<Array<IServidorData>>("/servidores");
  }

  get(id: string) {
    return api.get<IServidorData>(`/servidores/${id}`);
  }

  create(data: IServidorData) {
    return api.post<IServidorData>("/servidores", data);
  }

  update(data: IServidorData, id: any) {
    return api.put<any>(`/servidores/${id}`, data);
  }

  delete(id: any) {
    return api.delete<any>(`/servidores/${id}`);
  }

  deleteAll() {
    return api.delete<any>(`/servidores`);
  }

  findByTitle(matricula: string) {
    return api.get<Array<IServidorData>>(`/servidores?matricula=${matricula}`);
  }
}

export default new ServidorDataService();
