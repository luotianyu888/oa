// import React ,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import './assets/css/index.css';
// import App from './App';
// import AboutIndex from './components/backstage/about/aboutIndex'
// import PcIndex  from './components/backstage/index/pcIndex'
import * as serviceWorker from './serviceWorker';
// 
// class Index extends Component{
//     render(){
//         return(
//             <div>
//                 {/* <AboutIndex/>
//                 <PcIndex/> */}
//                 <App></App>
//             </div>
//         )
//     }
// };
// ReactDOM.render(<Index />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

/*
   React是 React 的核心库，
   ReactDOM 是提供与 DOM 相关的功能，

*/
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';      css可以删掉

//引入App.js这个组件
import App from './App';

//加快react运行速度的一个js文件
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

