export default function LogoutButton() {
  return (
    <form action="/routes/sign-out" method="post" className="">
      <button className="px-2 rounded-md no-underline bg-transparent text-sm transition-transform hover:scale-110">
        Logout
      </button>
    </form>
  )
}
