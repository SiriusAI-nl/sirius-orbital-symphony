
import React from 'react';

const ConstellationBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sirius Star (brightest) */}
      <div className="star w-2 h-2 top-[30%] left-[20%] animate-twinkle" style={{ animationDelay: '0s' }}></div>
      
      {/* Canis Major constellation */}
      <div className="star w-1.5 h-1.5 top-[35%] left-[25%] animate-twinkle" style={{ animationDelay: '1s' }}></div>
      <div className="star w-1 h-1 top-[40%] left-[26%] animate-twinkle" style={{ animationDelay: '2s' }}></div>
      <div className="star w-1 h-1 top-[38%] left-[30%] animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="star w-1 h-1 top-[42%] left-[32%] animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
      <div className="star w-1 h-1 top-[45%] left-[28%] animate-twinkle" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Canis Major connections */}
      <div className="star-connection h-[0.5px] w-[5%]" style={{ top: '35%', left: '20%', transform: 'rotate(15deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '37%', left: '25%', transform: 'rotate(45deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[4%]" style={{ top: '39%', left: '26%', transform: 'rotate(10deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[4%]" style={{ top: '39%', left: '30%', transform: 'rotate(30deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '43%', left: '29%', transform: 'rotate(-20deg)' }}></div>
      
      {/* Orion constellation */}
      <div className="star w-1.5 h-1.5 top-[50%] left-[60%] animate-twinkle" style={{ animationDelay: '0.7s' }}></div>
      <div className="star w-1.5 h-1.5 top-[45%] left-[62%] animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
      <div className="star w-1.5 h-1.5 top-[48%] left-[65%] animate-twinkle" style={{ animationDelay: '1.7s' }}></div>
      <div className="star w-1.5 h-1.5 top-[52%] left-[64%] animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
      <div className="star w-1.5 h-1.5 top-[55%] left-[62%] animate-twinkle" style={{ animationDelay: '0.2s' }}></div>
      <div className="star w-1.5 h-1.5 top-[55%] left-[67%] animate-twinkle" style={{ animationDelay: '0.9s' }}></div>
      
      {/* Betelgeuse (reddish star in Orion) - special highlight */}
      <div className="star w-2 h-2 top-[45%] left-[68%] animate-pulse" 
           style={{ backgroundColor: '#FF7B61', boxShadow: '0 0 12px 3px rgba(255,123,97,0.7)' }}></div>
      
      {/* Orion Belt - the three stars in the middle */}
      <div className="star w-1.5 h-1.5 top-[52%] left-[70%] animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
      <div className="star w-1.5 h-1.5 top-[52%] left-[73%] animate-twinkle" style={{ animationDelay: '1.3s' }}></div>
      <div className="star w-1.5 h-1.5 top-[52%] left-[76%] animate-twinkle" style={{ animationDelay: '2.3s' }}></div>
      
      {/* Orion connections */}
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '47%', left: '60%', transform: 'rotate(-45deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '46%', left: '63%', transform: 'rotate(15deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[2%]" style={{ top: '48%', left: '65%', transform: 'rotate(45deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '53%', left: '63%', transform: 'rotate(-30deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[5%]" style={{ top: '55%', left: '62%', transform: 'rotate(10deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '52%', left: '70%', transform: 'rotate(0deg)' }}></div>
      <div className="star-connection h-[0.5px] w-[3%]" style={{ top: '52%', left: '73%', transform: 'rotate(0deg)' }}></div>
      
      {/* Random stars throughout */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={i}
          className="star animate-twinkle" 
          style={{
            width: `${Math.random() * 1 + 0.5}px`,
            height: `${Math.random() * 1 + 0.5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default ConstellationBackground;
