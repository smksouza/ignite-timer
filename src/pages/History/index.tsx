import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  return (
    <div>
      <HistoryContainer>
        <h1>Meu histórico</h1>

        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </div>
  )
}
