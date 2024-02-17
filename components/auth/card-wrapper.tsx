"use client";

import { Card,
  CardContent,
  CardFooter,
  CardHeader
} from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Socials } from "./socials";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
  }: CardWrapperProps) => {
  return (
    <Card className="w-[410px] shadow-lg">
      <CardHeader>
        <Header label={headerLabel}/>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>

      <CardFooter>
        <Socials />
      </CardFooter>

      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  )
}
