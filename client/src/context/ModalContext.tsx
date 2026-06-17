import { createContext, useContext, useState } from "react";

type ModalType = "managed" | "intensive" | null;

interface ModalContextValue {
  modalType: ModalType;
  openModal: (type: "managed" | "intensive") => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  modalType: null,
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);
  return (
    <ModalContext.Provider value={{
      modalType,
      openModal: (type) => setModalType(type),
      closeModal: () => setModalType(null),
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
