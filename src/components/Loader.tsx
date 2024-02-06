import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div style={styles.container}>
      <Circles
        height={80}
        width={80}
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", 
  },
};

export default Loader;
