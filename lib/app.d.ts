declare let apiKey: string;
declare let requestToken: string;
declare let username: string;
declare let password: string;
declare let sessionId: string;
declare let listId: string;
declare let loginButton: HTMLInputElement;
declare let searchButton: HTMLInputElement;
declare let searchContainer: HTMLInputElement;
declare function preencherSenha(): void;
declare function preencherLogin(): void;
declare function preencherApi(): void;
declare function validateLoginButton(): void;
declare class HttpClient {
    static get({ url, method, body }: any): Promise<unknown>;
}
declare function procurarFilme(query: string): Promise<unknown>;
declare function adicionarFilme(filmeId: string): Promise<void>;
declare function criarRequestToken(): Promise<void>;
declare function logar(): Promise<void>;
declare function criarSessao(): Promise<void>;
declare function criarLista(nomeDaLista: string, descricao: string): Promise<void>;
declare function adicionarFilmeNaLista(filmeId: number, listaId: number): Promise<void>;
declare function pegarLista(): Promise<void>;
