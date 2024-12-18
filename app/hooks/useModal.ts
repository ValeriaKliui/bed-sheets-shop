import { useCallback, useEffect, useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsOpen] = useState(false);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const openModal = useCallback(() => setIsOpen(true), []);

  useEffect(() => {
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) closeModal();
    };

    document.addEventListener("keydown", closeOnEsc);
    return () => document.removeEventListener("keydown", closeOnEsc);
  });

  return { isModalOpen, openModal, closeModal };
}
