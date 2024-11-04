import React from 'react';


const Home = () => {
return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, color: "#333" }}>
            {/* Header */}
            <header style={{ backgroundColor: "#3EB489", color: "white", padding: "15px 0", textAlign: "center" }}>
                <h1>About Our Restaurant</h1>
            </header>

            {/* Main Content */}
            <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px" }}>
                {/* Introduction Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Welcome to Foodess</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0" }}>
                        At <span style={{ color: "#e74c3c", fontWeight: "bold" }}>Foodess</span>, we believe that food is more than just a meal – it’s an experience. Located in the heart of the city, our restaurant brings together flavors from around the world in a cozy and welcoming atmosphere.
                    </p>
                </section>

                {/* Image Section */}
                <img src="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D" alt="Inside View of Restaurant" style={{ display: "block", width: "100%", height: "auto", borderRadius: "8px", margin: "20px 0" }} />

                {/* Our Story Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Our Story</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0" }}>
                        Founded in 2005, <span style={{ color: "#e74c3c", fontWeight: "bold" }}>Foodess</span> started as a small family business with a passion for cooking. Over the years, we’ve grown into a well-loved spot known for our fresh ingredients, skilled chefs, and a diverse menu that appeals to all palates.
                    </p>
                </section>

                {/* Mission Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Our Mission</h2>
                    <p style={{ lineHeight: "1.6", margin: "10px 0" }}>
                        We aim to provide our guests with an unforgettable dining experience by delivering delicious food, outstanding service, and a warm ambiance. Our team is dedicated to bringing a smile to every guest's face with every dish we serve.
                    </p>
                </section>

                {/* Values Section */}
                <section style={{ marginBottom: "20px" }}>
                    <h2 style={{ color: "#444", textAlign: "center" }}>Our Values</h2>
                    <ul style={{ lineHeight: "1.6", margin: "10px 0" }}>
                        <li><span style={{ color: "#e74c3c", fontWeight: "bold" }}>Quality:</span> We use only the freshest ingredients sourced from local farms.</li>
                        <li><span style={{ color: "#e74c3c", fontWeight: "bold" }}>Service:</span> Our staff is trained to offer exceptional and friendly service.</li>
                        <li><span style={{ color: "#e74c3c", fontWeight: "bold" }}>Community:</span> We are committed to supporting our community and giving back.</li>
                    </ul>
                </section>
            </div>
        </div>
)
}

export default Home;