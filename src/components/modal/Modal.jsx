import './modal.scss';

const Modal = ({ active, setActive }) => {
  return (
    <section
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal__content modal-active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </section>
  );
};

export default Modal;
