import Toaster from 'components/toastComponent'

export const emailValidation = ({ email }: { email: string }) => {
  const emailRegex = /^\S+@\S+\.\S+$/

  if (!emailRegex.test(email)) {
    return <Toaster message="Please enter a valid email" />
  }
  return
}
