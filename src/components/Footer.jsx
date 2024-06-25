export default function Footer(props) {
    const { openModal } = props
  return (
    <footer>
        <div className="bgGradient"></div>
      <div>
        <h2>The Pillars of Creation</h2>
        <h1>APOD Project</h1>
      </div>
      <button onClick={() => {openModal(true)}}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
