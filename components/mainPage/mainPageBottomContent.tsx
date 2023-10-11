import Link from 'next/link'

function mainPageBottomContent({ user }: { user: object | null }) {
  return (
    <div className="flex flex-col items-center">
      <Link href={`${user ? '/clients' : '/login'}`} className=" ">
        <button className="bg-[#79d97c] py-0 px-8 mt-16 rounded-full text-lg text-white hover:bg-btn-background-hover ">
          <h5>
            <strong>Entrar</strong>
          </h5>
        </button>
      </Link>
      <Link href="/reset-password" className=" ">
        <button className=" text-xs my-2 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          He olvidado mi contraseña
        </button>
      </Link>
    </div>
  )
}

export default mainPageBottomContent
