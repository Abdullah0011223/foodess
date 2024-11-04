import Link from "next/link"


export default function Nav() {
    return (
        <div style={{ display: 'flex', backgroundColor: '#ff909c', padding: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#ffffff', margin: 0 }}>Foodess</h1>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
            <li style={{ marginLeft: '20px' }}>
                <a href="/home" style={{ color: 'white', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
                    Home
                </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
                <a href="/about" style={{ color: 'white', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
                    About
                </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
                <a href="/services" style={{ color: 'white', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
                    Services
                </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
                <a href="/menu" style={{ color: 'white', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
                    Menu
                </a>
            </li>
            <li style={{ marginLeft: '20px' }}>
                <a href="/contact" style={{ color: 'white', textDecoration: 'none', padding: '10px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>
                    Contact
                </a>
            </li>
        </ul>
    </div>
    )
}