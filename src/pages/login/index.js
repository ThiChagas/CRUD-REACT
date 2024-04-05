import "./index.css";
import {useState} from "react"
import Swal from "sweetalert2";
import usuarioService from "../../services/usuario-service";

function Login() {

    const [email, setEmail] = useState('admin@admin.com');
    const [senha, setSenha] = useState('123456');

    const autenticar = () => {
        
        if(!email || !senha){
            Swal.fire({
                icon: 'error',
                text: "Os campos de e-mail e senha são obrigatórios, verigique!"
            });
        }

        usuarioService
        .autenticar(email, senha)
        .then(response => {
            usuarioService.salvarToken(response.data.token);
            usuarioService.salvarUsuario(response.data.usuario);
            window.location = "/";
       
        })
        .catch(erro => {

        })

    };

    return (
        <div className="caixa-login">

                {/* LOGIN */}

                <div className="titulo-login">
                    <h1>Login</h1>
                </div>

                {/* E-MAIL */}

                <div className="grupo">
                    <label for="email">E-mail:</label> <br/>
                        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite seu e-mail"/>
                </div>

                        {/* SENHA */}

                        <div className="grupo">
                            <label for="senha">Senha:</label> <br/>
                                <input id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite sua senha"/>
                                </div>

                                {/* ENTRAR E RECUPERAR SENHA */}

                                <div className="esqueci-minha-senha">
                                    <a href="#">Esqueci minha senha</a>
                                </div>

                                <button id="btn-entrar" onClick={autenticar}>Entrar</button>

        </div>
    );
}

export default Login;