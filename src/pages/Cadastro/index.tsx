import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.css';

function Cadastro() {
  return (
    <>
      <section className="container">
        <h1 className="title">Faça seu Cadastro</h1>
        <p className="text">Seja Bem Vindo,👋</p>

        <form className="content">
          <Input label="Email" type="email"/>
          <Input label="Senha" type="password"/>
          <Input label="Confirmar Senha" type="password"/>

          <Button type="button" label="CONFIRMAR"/>

          <Link className="link" to="/">Voltar para Login</Link>
        </form>
        
      </section>
    </>
  )
}

export default Cadastro
