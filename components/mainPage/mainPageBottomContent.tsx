import Link from 'next/link'

function mainPageBottomContent({ user }: { user: object | null }) {
  return (
    <div className="flex flex-col items-center">
      <Link href={`${user ? '/clients' : '/login'}`}>
        <button className="bg-[#79d97c] py-0 px-8 mt-16 rounded-full text-lg  ">
          <h5 className="text-foreground">Entrar</h5>
        </button>
      </Link>
      <button className="text-xs my-2 py-2 px-4 rounded-md no-underline bg-transparent ">
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
