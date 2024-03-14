// Importa a biblioteca Axios
import axios from "axios";

// Cria uma instância do Axios com uma configuração específica
const instanceML = axios.create({
  // Define a URL base para todas as requisições feitas com esta instância
  baseURL: `https://api.mercadolibre.com/sites/MLB/search?q=`
});

// Exporta a instância personalizada do Axios para ser usada em outros lugares do código
export default instanceML;