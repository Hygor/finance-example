import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}