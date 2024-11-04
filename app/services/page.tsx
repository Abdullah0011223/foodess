const Home = () => {
    return (
        <div>
             <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, color: "#333" }}>
            {/* Header */}
            <header style={{ backgroundColor: "#3EB489", color: "white", padding: "15px 0", textAlign: "center" }}>
                <h1>Our Services</h1>
            </header>

            {/* Main Content */}
            <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px" }}>

                {/* Introduction Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Welcome to Foodess</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0", textAlign: "center" }}>
                        At <span style={{ color: "#e74c3c", fontWeight: "bold" }}>Foodess</span>, we offer a variety of services designed to enhance your dining experience. Our goal is to ensure that every guest leaves satisfied and eager to return.
                    </p>
                </section>

                {/* Services List Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Our Services</h2>
                    <ul style={{ lineHeight: "1.6", margin: "20px 0", listStyleType: "none", padding: 0 }}>
                        <li style={{ padding: "10px", border: "1px solid #e74c3c", borderRadius: "5px", margin: "10px 0" }}>
                            <h3 style={{ color: "#e74c3c" }}>Dine-In Experience</h3>
                            <p>Enjoy a warm and inviting atmosphere with our cozy dine-in services. Perfect for family gatherings or romantic dinners.</p>
                        </li>
                        <li style={{ padding: "10px", border: "1px solid #e74c3c", borderRadius: "5px", margin: "10px 0" }}>
                            <h3 style={{ color: "#e74c3c" }}>Takeout and Delivery</h3>
                            <p>Order your favorite dishes from the comfort of your home. We offer fast and reliable takeout and delivery services.</p>
                        </li>
                        <li style={{ padding: "10px", border: "1px solid #e74c3c", borderRadius: "5px", margin: "10px 0" }}>
                            <h3 style={{ color: "#e74c3c" }}>Catering Services</h3>
                            <p>Planning an event? Let us cater your special occasion with our customized menu options and professional service.</p>
                        </li>
                        <li style={{ padding: "10px", border: "1px solid #e74c3c", borderRadius: "5px", margin: "10px 0" }}>
                            <h3 style={{ color: "#e74c3c" }}>Special Events</h3>
                            <p>Join us for special events such as wine tastings, live music nights, and seasonal celebrations throughout the year.</p>
                        </li>
                    </ul>
                </section>

                {/* Closing Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Visit Us Today!</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0", textAlign: "center" }}>
                        Experience the best dining services at <span style={{ color: "#e74c3c", fontWeight: "bold" }}>Foodess</span>. We look forward to serving you!
                    </p>
                </section>
            </div>
        </div>
        </div>
    )
    }
    
    export default Home;