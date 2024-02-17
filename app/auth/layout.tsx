
const AuthLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className="flex items-center justify-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500 to-fuchsia-950">
        {children}
    </div>
  )
}

export default AuthLayout