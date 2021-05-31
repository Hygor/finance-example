import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {

  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>value</th>
            <th>category</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          { transactions.map( transaction => (
          <tr key={ transaction.id }>
            <td>{ transaction.title }</td>
            <td className={ transaction.type === 'withdraw' ? 'withdraw' : 'deposit'}>
              { new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount) }
              <span>
                { transaction.type === 'withdraw' ? ' -' : ' +' }
              </span>
            </td>
            <td>{ transaction.category }</td>
            <td>
              { new Intl.DateTimeFormat('pt-BR')
                .format(
                  new Date(transaction.createdAt)
                )
              }
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}