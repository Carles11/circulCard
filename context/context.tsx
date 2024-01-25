'use client'

import { createContext, useState } from 'react'

interface AdminUserContextType {
  showAdminSection: boolean
  setShowAdminSection: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAdminUserContext: AdminUserContextType = {
  showAdminSection: false,
  setShowAdminSection: () => {}, // Initial value for the setter function
}

export const AdminUserContext = createContext<AdminUserContextType>(
  initialAdminUserContext
)

function Context({ children }: { children: React.ReactNode }) {
  const [showAdminSection, setShowAdminSection] = useState(false)

  return (
    <AdminUserContext.Provider
      value={{ showAdminSection, setShowAdminSection }}
    >
      {children}
    </AdminUserContext.Provider>
  )
}

export default Context
