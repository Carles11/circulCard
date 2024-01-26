import ClientItem from 'components/clients/clientItem'
import Link from 'next/link'

function realTimeClients({ clients }: { clients: any }) {
  return (
    <div className="flex flex-col items-center mt-4 md:mt-16">
      <h3>Selecciona tu entidad</h3>
      {clients.length > 0 ? (
        clients.map((cli: any) => (
          <Link
            key={cli.id}
            href={{
              pathname: 'dashboard',
              query: {
                clientID: cli.id,
              },
            }}
            className="flex items-center place-content-center group text-sm"
          >
            <ClientItem client={cli} />
          </Link>
        ))
      ) : (
        <p>No clients available</p>
      )}
    </div>
  )
}

export default realTimeClients
