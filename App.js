import Routes from "./Routes";
import useAuth from "./src/customHooks/useAuth";
import Loading from "./src/components/Loading";

export default function App() {
  const { authenticated, isLoading } = useAuth();
  return (
    <>
    { isLoading ? <Loading/> : <Routes authenticated={authenticated}/>}
    </>
  );
}

