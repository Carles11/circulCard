export default function LogoutButton() {
  return (
    <form action="/routes/sign-out" method="post">
      <button className="py-2 px-8 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm">
        Logout
      </button>
    </form>
  )
}
