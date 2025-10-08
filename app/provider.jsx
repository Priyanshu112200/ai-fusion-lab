"use client"
import React, { useEffect } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useUser } from '@clerk/nextjs'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '@/config/FirebaseConfig'
function provider({ children, ...props }) {
  const {user}=useUser();
  useEffect(() => {
    if (user) {
      CreateNewUser().catch(console.error);
    }
  }, [user]);
  const CreateNewUser = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!email) {
      console.error('No email found for user');
      return;
    }
    const userRef = doc(db, "users", email);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      console.log('Existing User');
      return;
    } else {
      const userData = {
        name: user?.fullName,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        remainingMsg: 5,
        plan: 'Free',
        credits: 1000
      };
      await setDoc(userRef, userData);
      console.log('New User Data Saved');
    }
  }
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <SidebarProvider>
        <div className='flex w-full'>
          <AppSidebar/>
          <div className='flex-1'>
            <AppHeader />
            <div>
              {children}
            </div>
          </div>
        </div>
      </SidebarProvider>
    </NextThemesProvider>
  )
}

export default provider