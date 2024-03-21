import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	containerCards: {
		height: 130,
		width: "85%",
    marginBottom: 20,
	},

  componentCard: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: '#c6c6c6',
    height: '100%',
    borderRadius: 18,
    justifyContent: 'center',
  },
  imagemCard:{
    width: "40%",
    height: "80%",
    resizeMode: 'contain', // Para garantir que a imagem mantenha suas proporções
  },
  textsCard:{
    flex: 1, // Para que o contêiner de texto ocupe todo o espaço disponível
    paddingLeft: 10, // Espaçamento à esquerda para separar os textos da imagem
    paddingRight: 12, // Espaçamento à esquerda para separar os textos da imagem
    gap: 50,
  },
});

export default styles;
