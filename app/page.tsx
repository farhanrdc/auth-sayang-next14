import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500 to-fuchsia-950">
      <div className="space-y-7 text-center">
        <h1 className="text-white drop-shadow-lg text-5xl font-semibold">
          🔐Auth
        </h1>

        <p className="text-white text-lg">Authentication service for my beloved</p>

        <div>
          <LoginButton asChild>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>


    </main>
  );
}
