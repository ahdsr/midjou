import Lottie from 'react-lottie';
import * as animationData from './pinjump.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function LottieAnim() {
  const greeting = 'Hello Function Component!';
  const state = { isStopped: false, isPaused: false };
  return (
    <>
      <div className='-ml-8'>
        <Lottie
          options={defaultOptions}
          height={400}
          width={auto}
          isStopped={state.isStopped}
          isPaused={state.isPaused}
        />
      </div>
    </>
  );
}

// export defaul LottieControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isStopped: false, isPaused: false };
//   }
//   render() {
//     const buttonStyle = {
//       display: 'block',
//       margin: '10px auto',
//     };
//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//       rendererSettings: {
//         preserveAspectRatio: 'xMidYMid slice',
//       },
//     };
//     return (
//       <div>
//         <Lottie
//           options={defaultOptions}
//           height={300}
//           width={300}
//           isStopped={this.state.isStopped}
//           isPaused={this.state.isPaused}
//         />

//         {/* <button
//           style={buttonStyle}
//           onClick={() => this.setState({ isStopped: true })}
//         >
//           stop
//         </button>

//         <button
//           style={buttonStyle}
//           onClick={() => this.setState({ isStopped: false })}
//         >
//           play
//         </button>

//         <button
//           style={buttonStyle}
//           onClick={() => this.setState({ isPaused: !this.state.isPaused })}
//         >
//           pause
//         </button> */}
//       </div>
//     );
//   }
// }
