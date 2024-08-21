import { Button } from "@/components/ui/button"

import {
  Sheet,
  
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

 function SheetPage({children}: SheetPageProps) {
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
        
            {children}
        
        

        
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetPage