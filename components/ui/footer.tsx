export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-semibold mb-2">TechVision LMS</h3>
          <p className="text-sm text-muted-foreground">
            Learn tech skills with real projects and expert guidance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Links</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Courses</li>
            <li>Bootcamp</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-muted-foreground">
            Email: info@techvision.edu.et
          </p>
        </div>

      </div>

      <p className="text-center text-xs text-muted-foreground pb-6">
        © {new Date().getFullYear()} TechVision LMS
      </p>
    </footer>
  )
}