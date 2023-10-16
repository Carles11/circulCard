function clientItem({ client }: { client: any }) {
  return (
    <button
      className="w-full m-8 bg-lightgreenBg rounded-full text-lg px-4 py-2 text-white mb-2 hover:bg-btn-background-hover shadow-xl   "
      key={client.id}
    >
      {client.client_name}
    </button>
  )
}

export default clientItem
