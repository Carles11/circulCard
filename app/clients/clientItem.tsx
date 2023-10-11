function clientItem({ client }: { client: any }) {
  return (
    <button
      className="w-full m-8 bg-green-700 rounded-full text-lg px-4 py-2 text-white mb-2 hover:bg-btn-background-hover"
      key={client.id}
    >
      {client.client_name}
    </button>
  )
}

export default clientItem
