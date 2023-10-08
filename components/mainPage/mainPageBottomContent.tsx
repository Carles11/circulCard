import Link from 'next/link'

function mainPageBottomContent({ user }: { user: object }) {
  return (
    <div>
      <Link href={`${user ? '/clients' : '/login'}`} className="link-no-style">
        <button className="bg-[#79d97c] py-0 px-8 mt-16 rounded-full text-lg text-white hover:bg-btn-background-hover ">
          <h4>
            <strong>Entrar</strong>
          </h4>
        </button>
      </Link>
      <Link href="/reset-password">
        <button className="text-xs my-2 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          He olvidado mi contraseña
        </button>
      </Link>
    </div>
  )
}

export default mainPageBottomContent
