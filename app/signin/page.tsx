'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signIn } from "next-auth/react"

export default function CardDemo() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-appbg">
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Welcome to HRMS-AI</CardTitle>
                <CardDescription>
                    An open-source AI powered HRMS solution
                </CardDescription>
                <CardAction>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col gap-2">
                <Button  className="w-full cursor-pointer" onClick={()=>signIn('google')}>
                Login with Google
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
