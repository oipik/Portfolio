import { useEffect } from "react";
import "./modal.scss";

const Modal = ({ active, setActive, project }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setActive(false);
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [setActive, active]);

  return (
    <section
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content modal-active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="modal__title">{project?.name}</h1>
        <p className="modal__descr">{project?.descr}</p>
        <p className="modal__stack">
          <strong>Stack: </strong>
          {project?.stack.join(", ")}
        </p>
        <img className="modal__img" src={project?.src} alt={project?.name} />
        <div>
          <a
            href={project?.href}
            rel="noreferrer"
            className="btn modal__view"
            target="_blank"
          >
            Перейти на страницу
          </a>
          <button className="btn modal__back" onClick={() => setActive(false)}>
            Назад
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
