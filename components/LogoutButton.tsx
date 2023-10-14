export default function LogoutButton() {
  return (
    <form action="/routes/sign-out" method="post" className="flex items-center">
      |
      <button className="py-2 px-4 rounded-md no-underline text-foreground bg-transparent hover:bg-btn-background-hover flex items-center group text-sm">
        Logout
      </button>
      |
    </form>
  )
}
