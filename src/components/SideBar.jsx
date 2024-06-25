export default function SideBar(props) {
  const { closeModal, data } = props;
  return (
    <div className="sidebar">
      <div
        onClick={() => {
          closeModal(false);
        }}
        className="bgOverlay"
      ></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div>
          <h4>{data?.date}</h4>
          <div className="descriptionContainer">
            <p>{data?.explanation}</p>
          </div>
        </div>
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
}
