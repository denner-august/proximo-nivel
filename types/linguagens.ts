export interface descricaoProps {
  navigation: { goBack: () => void };
  route: {
    params: {
      linguagem: {
        titulo: string;
        subtitulo: string;
        conteudo: string;
        exemplos: string[];
      };
    };
  };
}

export interface linguangesProps {
  item: {
    titulo: string;
    subtitulo: string;
    conteudo: string;
    exemplos: string[];
  };
}
