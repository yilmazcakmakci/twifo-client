import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/styles.css'
// import './css/tailwind.css'
import 'antd/dist/antd.css';
import './css/app.css'
import 'aos/dist/aos.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import AOS from 'aos';
import dayjs from 'dayjs'

AOS.init()

const  relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

ReactDOM.render(<App />, document.getElementById('app'));