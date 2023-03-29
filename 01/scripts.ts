type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

type UsuarioExcludeRg = Omit<Usuario, "rg">;
type UsuarioPropsRequired = Required<UsuarioExcludeRg>;

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};
