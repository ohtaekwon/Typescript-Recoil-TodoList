import React, { Suspense } from "react"; // 비동기 처리를 위해 suspense를 사용
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil"; // RecoilRoot는 Recoil 상태값을 사용할 수 있는 Provider를 제공한다.
import Loader from "./components/Loader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
