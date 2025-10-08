import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

function AppHeader() {
  return (
    <div className="w-full bg-white dark:bg-[#18181b] shadow-sm border-b dark:border-none h-10 flex items-center">
      <SidebarTrigger className="cursor-pointer" />
    </div>
  )
}

export default AppHeader