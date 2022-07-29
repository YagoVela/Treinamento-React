import { ITreinamento } from '../Interface/ITreinamento';
import Count from './Count';

function TreinamentoList({tema, user, link} : ITreinamento) {
  return (
    <>
      <li>
        <strong>{tema ?? 'Tema a definir'}</strong>
        <p>{user ?? 'User a definir'}</p>
        
        <Count />

        <a href={link}>
          Acessar o Evento
        </a>
      </li>
      <br />
    </>
  )
}

export default TreinamentoList
