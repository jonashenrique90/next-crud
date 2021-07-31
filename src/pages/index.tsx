import { Button } from "../components/button";
import { Form } from "../components/form";
import { Layout } from "../components/layout";
import { Table } from "../components/table";
import { useClients } from "../hooks/useClients";

export default function Home() {

  const { selectedClient, deletedClient, newClient, saveClient, setIsVisible, client, clients, isVisible } = useClients();

  return (
    <div className={`
      flex
      justify-center
      items-center
      h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout title="Cadastro simples">
        {isVisible === 'table' ?
          (
            <>
              <div className="flex justify-end">
                <Button className="mb-4" color="green" onClick={newClient}>
                  Novo cliente
                </Button>
              </div>
              <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
            </>
          ) : (
            <Form client={client} fnCancel={() => setIsVisible('table')} clientChange={saveClient} />
          )}
      </Layout>
    </div>
  )
}
