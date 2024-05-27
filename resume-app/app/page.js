"use client"
import Resume from "./component/Resume";
import Sidebar from "./component/Sidebar";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="grid grid-cols-3">
        <Sidebar />
        <Resume />
      </main>
    </Provider>
  );
}
