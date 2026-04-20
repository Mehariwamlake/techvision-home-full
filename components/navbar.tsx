import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">
          TechVision LMS
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="#courses">Courses</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        <div className="flex gap-2">
          <Button variant="outline">Login</Button>
          <Button>Apply</Button>
        </div>
      </div>
    </header>
  )
}