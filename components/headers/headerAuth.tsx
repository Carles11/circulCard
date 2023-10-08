import LogoutButton from 'components/LogoutButton'

function authHeader({ user }: { user: object }) {
  return (
    <div>
      {user && (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
            <div />
            <div>
              <div className="flex items-center gap-4">
                <LogoutButton />
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}

export default authHeader
