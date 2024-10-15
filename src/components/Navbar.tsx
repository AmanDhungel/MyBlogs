import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"

  import Link from "next/link"
  
  export function MenubarDemo() {
    return (
      <Menubar>
        <MenubarMenu>
         <Link href='/'><MenubarTrigger>Home</MenubarTrigger></Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href='/services'><MenubarTrigger>Services</MenubarTrigger></Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href='/blog'><MenubarTrigger>Blog</MenubarTrigger></Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href='/contact'><MenubarTrigger>Contact</MenubarTrigger></Link>
        </MenubarMenu>
      </Menubar>
    )
  }
  