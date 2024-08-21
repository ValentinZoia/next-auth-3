import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
;
 


  interface SheetPageProps{
    children: React.ReactNode
  }

const SheetPage: React.FC<SheetPageProps> = ({children}) => {
  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>LOGO</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetClose asChild>
            {children}
        </SheetClose>
        

        
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}


export default SheetPage