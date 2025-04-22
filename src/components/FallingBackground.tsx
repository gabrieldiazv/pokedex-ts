
import pokeBall from '../assets/pokeball2.png'; 
const FallingBackground = () => {

    const config = [
      { left: "30%", size: 59, delay: 1 },
      { left: "45%", size: 152, delay: 2 },
      { left: "49%", size: 58, delay: 5 },
      { left: "82%", size: 86, delay: 2 },
      { left: "33%", size: 54, delay: 12 },
      { left: "36%", size: 68, delay: 8 },
      { left: "22%", size: 92, delay: 26 },
      { left: "81%", size: 96, delay: 8 },
      { left: "8%", size: 88, delay: 33 },
      { left: "42%", size: 2, delay: 22 },
      { left: "22%", size: 43, delay: 18 },
      { left: "67%", size: 62, delay: 51 },
      { left: "22%", size: 64, delay: 23 },
      { left: "31%", size: 83, delay: 62 },
      { left: "45%", size: 158, delay: 50 },
      { left: "75%", size: 46, delay: 17 },
      { left: "51%", size: 107, delay: 25 },
      { left: "63%", size: 18, delay: 19 },
      { left: "82%", size: 5, delay: 13 },
      { left: "10%", size: 5, delay: 1 },
      { left: "43%", size: 14, delay: 36 },
      { left: "3%", size: 8, delay: 16 },
      { left: "14%", size: 127, delay: 85 },
      { left: "24%", size: 118, delay: 102 },
      { left: "19%", size: 124, delay: 119 },
      { left: "17%", size: 69, delay: 82 },
      { left: "63%", size: 82, delay: 23 },
      { left: "15%", size: 34, delay: 38 },
      { left: "45%", size: 78, delay: 12 },
      { left: "25%", size: 7, delay: 112 },
      { left: "77%", size: 147, delay: 46 },
      { left: "53%", size: 125, delay: 125 },
      { left: "81%", size: 98, delay: 49 },
      { left: "24%", size: 42, delay: 29 },
    ];
  
    return (
        <ul className="falling-background">
          {config.map((c, i) => (
            <li
              key={i}
              style={{
                left: c.left,
                width: `${c.size}px`,
                height: `${c.size}px`,
                bottom: `-${c.size}px`,
                animationDelay: `${c.delay}s`,
                backgroundImage: `url(${pokeBall})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </ul>
      );
  };
  
  export default FallingBackground;
  