const Spinner = () => {
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            //xmlns:xlink="http://www.w3.org/1999/xlink" 
            style={{margin: '80px auto', display: 'block'}}
            width="110px" 
            height="80px" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="xMidYMid">
            <circle cx="84" cy="50" r="10" fill="#000000">
                <animate attributeName="r" repeatCount="indefinite" dur="0.6097560975609756s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
                <animate attributeName="fill" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#000000;#000000;#736351;#403228;#000000" begin="0s"></animate>
            </circle><circle cx="16" cy="50" r="10" fill="#000000">
            <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
            </circle><circle cx="50" cy="50" r="10" fill="#403228">
            <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.6097560975609756s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.6097560975609756s"></animate>
            </circle><circle cx="84" cy="50" r="10" fill="#736351">
            <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2195121951219512s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2195121951219512s"></animate>
            </circle><circle cx="16" cy="50" r="10" fill="#000000">
            <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.8292682926829267s"></animate>
            <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.8292682926829267s"></animate>
            </circle>
        </svg>
    )
}

export default Spinner;