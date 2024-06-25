export default function SideBar(props) {
  const { closeModal } = props;
  return (
    <div className="sidebar">
      <div
        onClick={() => {
          closeModal(false);
        }}
        className="bgOverlay"
      ></div>
      <div className="sidebarContents">
        <h2>The Pillars of Creation</h2>
        <div>
          <h3>Description</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            eius, eligendi nihil, repellendus, perspiciatis pariatur magni
            labore dicta quisquam sapiente quidem minus? Dolore provident
            eveniet dicta ratione. Excepturi, veniam dicta! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. In illum eum consequatur!
            Dolore delectus saepe minima fugiat voluptas dolorem perferendis
            sint corrupti eligendi enim eius laboriosam nesciunt placeat, quas
            repellat vel voluptate doloremque temporibus dolor.
          </p>
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
