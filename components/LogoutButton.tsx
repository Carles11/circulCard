export default function LogoutButton() {
  return (
    <form action="/routes/sign-out" method="post" className="mx-2">
      <button className="py-4 px-2 transition rounded-md no-underline bg-transparent text-sm hover:animate-scale-up">
        Logout
      </button>
    </form>
  )
}
