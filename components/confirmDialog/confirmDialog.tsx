import Dialog from './basicDialog'
import Button from 'components/buttons/basicButton'
interface Props {
  title: string
  children: React.ReactNode
  open: boolean
  onClose: Function
  onConfirm: Function
}
export default function Confirm(props: Props) {
  const { open, onClose, title, children, onConfirm } = props
  if (!open) {
    return <></>
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <h2 className="text-xl">{title}</h2>
      <div className="text-gray-700">{children}</div>
      <div className="flex justify-end">
        <div className="p-1">
          <Button
            onClick={() => onClose()}
            className="bg-btn-background-hover hover:bg-background"
          >
            No
          </Button>
        </div>
        <div className="p-1">
          <Button
            onClick={() => {
              onClose()
              onConfirm()
            }}
            className="bg-btn-background hover:bg-background-hover"
          >
            Sí
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
