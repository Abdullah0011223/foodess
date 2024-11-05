import Link from "next/link"

export default function Nav() {
    return (
        <div style={{ display: "flex", backgroundColor: "#ff909c", padding: "10px", justifyContent: "space-between", alignItems: "center" }}>
    <h1 style={{ color: "#ffffff", margin: 0 }}>Foodess</h1>
    <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
        <li style={{ marginLeft: "20px" }}>
            <Link href="/home" style={{ color: "white", textDecoration: "none", padding: "10px 15px", borderRadius: "5px", transition: "background-color 0.3s" }}>
                Home
            </Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
            <Link href="/about" style={{ color: "white", textDecoration: "none", padding: "10px 15px", borderRadius: "5px", transition: "background-color 0.3s" }}>
                About
            </Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
            <Link href="/services" style={{ color: "white", textDecoration: "none", padding: "10px 15px", borderRadius: "5px", transition: "background-color 0.3s" }}>
                Services
            </Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
            <Link href="/menu" style={{ color: "white", textDecoration: "none", padding: "10px 15px", borderRadius: "5px", transition: "background-color 0.3s" }}>
                Menu
            </Link>
        </li>
        <li style={{ marginLeft: "20px" }}>
            <Link href="/contact" style={{ color: "white", textDecoration: "none", padding: "10px 15px", borderRadius: "5px", transition: "background-color 0.3s" }}>
                Contact
            </Link>
        </li>
    </ul>
</div>
    )
}