import Link from 'next/link'

function mainPageBottomContent({ user }: { user: object | null }) {
  return (
    <div className="flex flex-col items-center">
      <Link href={`${user ? '/clients' : '/login'}`}>
        <button className="bg-lightgreenBg rounded-full text-lg px-4 py-2 mb-2 hover:bg-btn-background-hover hover:text-btn-text-color-hover">
          <h5 className="text-foreground">Entrar</h5>
        </button>
      </Link>
      <button className="text-xs my-2 py-2 px-4 rounded-md no-underline bg-transparent">
        <a
          href="/reset-password"
          rel="noopener"
          target="_self"
          className="link-with-style"
        >
          He olvidado mi contraseña
        </a>
      </button>
    </div>
  )
}

export default mainPageBottomContent
