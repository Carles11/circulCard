export default function LogoutButton() {
  return (
    <form action="/routes/sign-out" method="post" className="mt-2">
      <button className="py-2 px-4 rounded-md no-underline bg-transparent text-sm hover:border hover:border-btn-background-hover dark:hover:border-foreground">
        Logout
      </button>
    </form>
  )
}
