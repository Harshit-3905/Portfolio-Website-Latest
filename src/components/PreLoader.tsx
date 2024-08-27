const Preloader = () => {
  return (
    <div className="preloader">
      <style>{`
        .preloader {
          width: 100%;
          height: 100%;
          position: fixed;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          cursor: none;
          left: 0;
          top: 0;
        }

        .loader {
          position: relative;
          width: 150px;
          height: 150px;
          background: transparent;
          border-radius: 50%;
          box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.55);
          border: 1px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .loader::before {
          content: "";
          position: absolute;
          inset: 20px;
          background: transparent;
          border: 1px dashed #444;
          border-radius: 50%;
          box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
            inset 5px 5px 35px rgba(0, 0, 0, 0.25);
        }

        .loader::after {
          content: "";
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px dashed #444;
          box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25),
            inset 5px 5px 35px rgba(0, 0, 0, 0.25);
        }

        .loader span {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50%;
          height: 100%;
          background: transparent;
          transform-origin: top left;
          animation: radar81 2s linear infinite;
          border-top: 1px dashed #fff;
        }

        .loader span::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #F56E0F;
          transform-origin: top left;
          transform: rotate(-55deg);
          filter: blur(30px) drop-shadow(20px 20px 20px #F56E0F);
        }

        @keyframes radar81 {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="loader">
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
