export default function LogoutButton() {
  return (
    <form action="/routes/sign-out" method="post">
      <button className="no-underline bg-btn-background hover:bg-white">
        Logout
      </button>
    </form>
  )
}
