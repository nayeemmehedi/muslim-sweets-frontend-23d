export default function LazyImage({ src }) {
    return (
      <div
        className="value"
        style={{
          backgroundImage: `url(${src})`,
          width: "100%",
          minHeight: "600px",
        }}
      ></div>
    );
  }