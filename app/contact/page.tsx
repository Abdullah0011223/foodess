const Home = () => {
    
    return (
        <div>
            <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, color: "#333" }}>
            
            <header style={{ backgroundColor: "#3EB489", color: "white", padding: "15px 0", textAlign: "center" }}>
                <h1>Contact Us</h1>
            </header>

            
            <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px" }}>

                
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444" }}>Thanks for Contact us</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0" }}>
                        For inquiries, please reach out to us using the information below:
                    </p>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li style={{ margin: "10px 0" }}>
                            <strong>Email:</strong> <a href="abdullahsohail08@gmail.com" style={{ color: "#e74c3c" }}>abdullahsohail08@gmail.com</a>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <strong>Phone:</strong> <a href="tel +923130187991" style={{ color: "#e74c3c" }}>+92 3130187991</a>
                        </li>
                        <li style={{ margin: "10px 0" }}>
                            <strong>Address:</strong> Foodess Restaurant Lane, Food City, CA 12345
                        </li>
                    </ul>
                </section>

                
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444" }}>Contact Form</h2>
                    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <input type="text" placeholder="Your Name" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                        <input type="email" placeholder="Your Email" required style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                        <textarea placeholder="Your Message" required rows={5} style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                        <button type="submit" style={{ padding: "10px", backgroundColor: "#e74c3c", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                            Send Message
                        </button>
                    </form>
                </section>

                
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444" }}>Visit Us</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0" }}>
                        We would love to hear from you! Feel free to reach out via email or phone, or visit us in person at our restaurant.
                    </p>
                </section>
            </div>
        </div>
        </div>
    )
    }
    
    export default Home;