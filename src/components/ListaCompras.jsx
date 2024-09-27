import { useState, useEffect } from 'react';
import '../styles/ListaCompras.css';
import luaIcon from '../images/lua.png';

const itensCulinariaCoreana = [
  { nome: 'Kimchi', valorUnitario: 15.0, quantidade: 1 },
  { nome: 'Bulgogi', valorUnitario: 35.0, quantidade: 2 },
  { nome: 'Tteokbokki', valorUnitario: 12.0, quantidade: 3 },
  { nome: 'Gochujang', valorUnitario: 8.0, quantidade: 1 },
  { nome: 'Bibimbap', valorUnitario: 25.0, quantidade: 1 },
];

function ListaCompras() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
  };

  useEffect(() => {
    if (modoEscuro) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#f9f9f9';
      document.body.style.color = '#333';
    }
  }, [modoEscuro]);

  const valorTotalCompra = itensCulinariaCoreana.reduce(
    (acc, item) => acc + item.valorUnitario * item.quantidade,
    0
  );

  return (
    <div className={modoEscuro ? 'lista-compras-container escuro' : 'lista-compras-container'}>
      <header>
        <h1>Lista de Compras</h1>
        <button className="botao-lua" onClick={alternarModo}>
          <img src={luaIcon} alt="Modo Escuro" />
        </button>
      </header>
      <table className="tabela-itens">
        <thead>
          <tr>
            <th>Item</th>
            <th>Valor Unitário (R$)</th>
            <th>Quantidade</th>
            <th>Valor Total (R$)</th>
          </tr>
        </thead>
        <tbody>
          {itensCulinariaCoreana.map((item, index) => {
            const valorTotalItem = item.valorUnitario * item.quantidade;
            return (
              <tr key={index}>
                <td>{item.nome}</td>
                <td>{item.valorUnitario.toFixed(2)}</td>
                <td>{item.quantidade}</td>
                <td>{valorTotalItem.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Total da Compra: R$ {valorTotalCompra.toFixed(2)}</h2>
    </div>
  );
}

export default ListaCompras;