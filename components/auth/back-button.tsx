"use client"

import Link from "next/link"
import { Button } from "../ui/button";
interface BackButtonProps{
    href:string;
    label:string;
}

export const BackButton = ({
    href,
    label,
  }: BackButtonProps) => {
    
  return (
    <Button className="w-full font-medium" variant="link" size="lg" asChild>
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}
