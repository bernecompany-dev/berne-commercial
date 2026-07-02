import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="954 Appliance Repair home">
      <span className="logo__badge">954</span>
      <span className="logo__text">
        Appliance Repair
        <small>Broward County</small>
      </span>
    </Link>
  )
}
