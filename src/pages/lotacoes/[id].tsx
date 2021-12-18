import { LotacaoAdd } from "../../components/Lotacao-add";
import LotacaoDataService from "../../services/lotacao.service";

export default LotacaoAdd;

export async function getServerSideProps(params: any) {
  console.log(params);
  const lotacao = await LotacaoDataService.get(`/lotacoes/${params.id}`);

  return {
    props: { lotacao },
  };
}
