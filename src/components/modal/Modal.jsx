import "./modal.scss";

const Modal = ({ active, setActive }) => {
  return (
    <section
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        lore
      </div>
    </section>
  );
};

export default Modal;
