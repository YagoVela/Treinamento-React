import { useState } from 'react';

function Count() {
  const [contador, setContador] = useState(0);

  function add () {
    setContador(contador + 1);
  }
  
  return (
      <>
        <button style={{marginRight: "10px"}} onClick={add}>Adicionar Pessoas</button>
        <span style={{marginRight: "10px"}}>{`Pessoas Adicionadas ${contador}`}</span>
      </>
  )
}

export default Count;
