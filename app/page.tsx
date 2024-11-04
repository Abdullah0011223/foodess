import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        
        <div style={{ textAlign: "center", margin: "20px 0" }}>
            <img src="https://seekvectors.com/files/download/A&W%20Root%20Beer%20Logo-01.png" alt="Restaurant Logo" style={{ width: "150px" }} />
        </div>

        
        <div style={{ textAlign: "center" }}>
            <img src="https://tb-static.uber.com/prod/image-proc/processed_images/338754f6489325838600a61463498e72/9ba9ffab5f885fc3dac87838b3357014.webp" alt="Restaurant Image" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
        </div>

        
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Welcome to Our Restaurant</h1>
            <p>Experience the best food in town with a delightful ambiance. Join us for an unforgettable dining experience!</p>
        </div>
    </div>
    </div>
  );
}
