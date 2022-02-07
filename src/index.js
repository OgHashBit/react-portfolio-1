import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Diamonds from "./diamonds/Diamonds"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
