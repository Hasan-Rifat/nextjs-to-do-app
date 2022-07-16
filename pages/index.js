import Banner from "../Components/Home/Banner";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  console.log(auth);
  return (
    <>
      <Banner />
    </>
  );
}
