import Link from 'next/link'
import Messages from '../messages'

export default function PasswordUpdate() {
  return (
    <div className="flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        action="/routes/update-password"
        method="post"
        className="flex flex-col w-full my-28 py-2 px-4 rounded-md no-underline"
      >
        <h3>Recuperación de contraseña</h3>

        <label className="sr-only" htmlFor="username">
          Username
        </label>
        <input
          className="sr-only"
          type="username"
          name="username"
          placeholder=""
          autoComplete="username"
        />
        <label className="text-md my-2" htmlFor="password">
          Nueva contraseña
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="new_password"
          placeholder="••••••••"
          required
          autoComplete="new-password"
        />

        <button className="bg-lightgreenBg rounded-full text-lg px-4 py-2 text-foreground mb-2 hover:bg-btn-background-hover">
          Actualizar
        </button>
      </form>
      <Messages />
    </div>
  )
}
