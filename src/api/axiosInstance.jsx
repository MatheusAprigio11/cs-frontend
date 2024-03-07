// Importa a biblioteca Axios
import axios from "axios";

// Cria uma instância do Axios com uma configuração específica
const instance = axios.create({
  // Define a URL base para todas as requisições feitas com esta instância
  baseURL: 'http://10.109.71.8:8000/api/v1'
});

// Exporta a instância personalizada do Axios para ser usada em outros lugares do código
export default instance;