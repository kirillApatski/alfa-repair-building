import React, {FC} from 'react';

type CallSvgPropsType = {
  className?: string
}

const CallSvg:FC<CallSvgPropsType> = ({className}) => {
  const finishClassName = className ? className : ""
  return (
    <svg className={finishClassName} width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="37" cy="37" r="32" fill="#E4E4E4"/>
      <g filter="url(#filter0_d_506_2)">
        <circle cx="37" cy="37" r="25" fill="white"/>
        <circle cx="37" cy="37" r="24.25" stroke="#319F1C" strokeWidth="1.5"/>
      </g>
      <circle cx="53" cy="55" r="5" fill="#319F1C"/>
      <path d="M46.4755 41.7089L43.6786 38.9119C42.6797 37.913 40.9816 38.3126 40.582 39.6112C40.2823 40.5102 39.2834 41.0097 38.3844 40.8099C36.3866 40.3104 33.6896 37.7133 33.1901 35.6156C32.8904 34.7165 33.4898 33.7176 34.3888 33.418C35.6874 33.0184 36.0869 31.3203 35.088 30.3214L32.2911 27.5244C31.492 26.8252 30.2933 26.8252 29.5941 27.5244L27.6961 29.4223C25.7982 31.4202 27.8959 36.7143 32.5908 41.4092C37.2856 46.1041 42.5798 48.3017 44.5776 46.3038L46.4755 44.4059C47.1748 43.6068 47.1748 42.4081 46.4755 41.7089Z" fill="#319F1C"/>
      <defs>
        <filter id="filter0_d_506_2" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="6"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.192157 0 0 0 0 0.623529 0 0 0 0 0.109804 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_506_2"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_506_2" result="shape"/>
        </filter>
      </defs>
    </svg>

  );
};

export default CallSvg;