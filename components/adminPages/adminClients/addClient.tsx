import AddClientForm from './addClientForm'

const AddClient = ({
  onCreateClient,
  onClose,
}: {
  onCreateClient: Function
  onClose: Function
}) => {
  if (!onClose) {
    return <></>
  }
  return (
    <div>
      <AddClientForm
        onClose={() => onClose(false)}
        onCreateClient={onCreateClient}
      />
    </div>
  )
}

export default AddClient
