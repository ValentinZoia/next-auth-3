'use client'
import { Input, InputPassword } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function InputPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>


        <Input type="text" placeholder='Email' />

        <InputPassword type="password" placeholder='Password' />


        {/* WITHOUT AUTOCOMPLETE */}
        <Input type="email" placeholder='Email' autoComplete='off' />

        <InputPassword type="password" placeholder='Password' autoComplete='off'/>

        <Input type='password' placeholder='Password' />
      

        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
        </div>

        <div>
        <InputPassword type="password" placeholder='Password' className=''/>
        </div>  
        
        
        
    </div>
  )
}
