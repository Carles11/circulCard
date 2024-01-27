import AddMaterialForm from './addMaterialForm'

const AddMaterial = ({
  onCreateMaterial,
  onClose,
}: {
  onCreateMaterial: Function
  onClose: Function
}) => {
  if (!onClose) {
    return <></>
  }
  return (
    <div>
      <AddMaterialForm
        onClose={() => onClose(false)}
        onCreateMaterial={onCreateMaterial}
      />
    </div>
  )
}

export default AddMaterial
