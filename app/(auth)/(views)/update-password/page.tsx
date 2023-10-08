import Link from 'next/link'
import Messages from '../messages'

export default function PasswordUpdate() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        action="/routes/update-password"
        method="post"
        className="flex-1 flex flex-col w-full my-28 py-2 px-4 rounded-md no-underline bg-btn-background"
      >
        <h1 className="text-white">Recuperación de contraseña</h1>

        <label className="text-md text-white my-2" htmlFor="password">
          Nueva contraseña
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 text-white"
          type="password"
          name="new_password"
          placeholder="••••••••"
          required
          autoComplete="new-password"
        />

        <button className="bg-green-700 rounded-full text-lg px-4 py-2 text-white mb-2 hover:bg-btn-background-hover">
          Actualizar
        </button>
      </form>
      <Messages />
    </div>
  )
}