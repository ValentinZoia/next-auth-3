"use client"
 
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Toast() {
    const { toast } = useToast()
    return (
        <div className="grid gap-4 grid-cols-3">
        <Button
        variant="outline"
        onClick={() => {
          toast({
            description: "Your message has been sent.",
          })
        }}
      >
        Toast Normal
        </Button>
        <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong",
            description: "",
            variant: "destructive",
          })
        }}
      >
        Toast Error
        </Button>
        <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Successfully sent your message 🚀",
            description: "",
            variant: "success",
          })
        }}
      >
        Toast Success
        </Button>
        </div>
        
    )
  
}
