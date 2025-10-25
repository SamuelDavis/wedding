export default function RSVP() {
  const getDimensions = () =>
    document.body.clientWidth >= 640
      ? { width: 640, height: 1174 }
      : { width: 320, height: 1280 };
  return (
    <article style={{ overflow: "auto" }}>
      <h1>RSVP</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc3hlIlQqsGeg0PHH6imz9Uz9w2MqVisY--CZn3ynRxoRz5bg/viewform?embedded=true"
        width={getDimensions().width}
        height={getDimensions().height}
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading...
      </iframe>
    </article>
  );
}
