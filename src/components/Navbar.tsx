import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import {navbar} from '../sample-data/Navbar'

  import Link from "next/link"
  
  export function MenubarDemo() {
    return (
      <Menubar className="cursor-pointer">
       {navbar.map((item) => (
         <MenubarMenu key={item.href}>
         <Link href={item.href}><MenubarTrigger className="cursor-pointer">{item.title}</MenubarTrigger></Link>
        </MenubarMenu>
      ))} 
      </Menubar>
    )
  }
  
