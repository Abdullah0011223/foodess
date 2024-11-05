

const Home = () => {
    return (
        <div style={{ margin: 0, fontFamily: "Arial, sans-serif", backgroundColor: "#f8f8f8" }}>
    <header style={{ backgroundColor: "#3EB489", color: "white", padding: "15px", textAlign: "center" }}>
        <h1>Welcome to Our Food Store</h1>
        <p>Delicious food delivered to your door!</p>
    </header>

    <main style={{ maxWidth: "1200px", margin: "50px auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        
        <div style={{ backgroundColor: "white", border: "3px solid #ddd", borderRadius: "5px", margin: "10px", padding: "15px", width: "250px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)" }}>
            <img src="https://static.toiimg.com/thumb/56933159.cms?imgsize=686279&width=800&height=800" alt="Pizza" style={{ width: "100%", borderRadius: "5px" }} />
            <h3 style={{ margin: "10px 0" }}>Delicious Pizza</h3>
            <p style={{ color: "#777" }}>A tasty pizza with fresh ingredients.</p>
            <p style={{ fontWeight: "bold" }}>$12.99</p>
            <button style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
        </div>

        
        <div style={{ backgroundColor: "white", border: "3px solid #ddd", borderRadius: "5px", margin: "10px", padding: "15px", width: "250px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <img src="https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2021/06/Beef-Burgers-067-250x250.jpg" alt="Burger" style={{ width: "100%", borderRadius: "5px" }} />
            <h3 style={{ margin: "10px 0" }}>Juicy Burger</h3>
            <p style={{ color: "#777" }}>A delicious burger.</p>
            <p style={{ fontWeight: "bold" }}>$9.99</p>
            <button style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
        </div>

        
        <div style={{ backgroundColor: "white", border: "3px solid #ddd", borderRadius: "5px", margin: "10px", padding: "15px", width: "250px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <img src="https://www.farmboy.ca/wp-content/uploads/2023/12/Ah-So-Ruby-Sushi-Platter.png" alt="Sushi" style={{ width: "100%", borderRadius: "5px" }} />
            <h3 style={{ margin: "10px 0" }}>Sushi Platter</h3>
            <p style={{ color: "#777" }}>A selection of fresh sushi.</p>
            <p style={{ fontWeight: "bold" }}>$15.99</p>
            <button style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
        </div>

        
        <div style={{ backgroundColor: "white", border: "1px solid #ddd", borderRadius: "5px", margin: "10px", padding: "15px", width: "250px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <img src="https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg" alt="Pasta" style={{ width: "100%", borderRadius: "5px" }} />
            <h3 style={{ margin: "10px 0" }}>Creamy Pasta</h3>
            <p style={{ color: "#777" }}>A rich and creamy pasta dish.</p>
            <p style={{ fontWeight: "bold" }}>$11.49</p>
            <button style={{ backgroundColor: "#e74c3c", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Add to Cart</button>
        </div>
    </main>

    <footer style={{ textAlign: "center", padding: "15px", backgroundColor: "#333", color: "white" }}>
        <p>&copy; 2024 Food Store. All rights reserved.</p>
    </footer>
</div>

    )
}

export default Home;