import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link } from 'react-router-dom'
import './style.css';

function Login() {
  return (
    <>
      <section className="container">
        <h1 className="title">Faça seu Login</h1>
        <p className="text">Seja Bem Vindo,👋</p>

        <form className="content">
          <Input label="Email" type="email"/>
          <Input label="Senha" type="password"/>

          <Button type="button" label="ENTRAR"/>

          <Link className="link" to="/cadastro">Cadastre-se Já</Link>
        </form>
        
      </section>
    </>
  )
}

export default Login
