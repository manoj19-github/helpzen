
"use client"
import { Button } from "@workspace/ui/components/button"
import { add } from "@workspace/math/add"
import { useMutation, useQuery } from "convex/react"
import {api} from "@workspace/backend/_generated/api"
export default function Page() {
  const data = useQuery(api.users.getMany)
  const add = useMutation(api.users.add)
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          hi This Manoj Santra  from  HelpZen  web 
         </div>
         
          {JSON.stringify(data,null,2)}
         
      </div>
      <Button className="cursor-pointer" onClick={()=>add()}>
        Add
      </Button>
    </div>
  )
}
