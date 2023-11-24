import Messages from '../messages'

export default function PasswordReset() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form
        action="/routes/reset-password"
        method="post"
        className="flex flex-col w-full my-28 py-2 px-4 rounded-md no-underline"
      >
        <h3>Actualiza tu contraseña</h3>
        <label className="text-md my-2" htmlFor="password">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
          autoComplete="username"
        />
        <button className="bg-lightgreenBg rounded-full text-lg px-4 py-2 mb-2 hover:bg-btn-background-hover hover:text-btn-text-color-hover">
          Validar
        </button>
      </form>
      <Messages />
    </div>
  )
}
