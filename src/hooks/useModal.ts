import { useEffect, useCallback } from "react";

const useModal = (
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleEscape = useCallback(
    (event: any) => {
      if (event.keyCode === 27) {
        // ESC key
        handleClose();
      }
    },
    [handleClose]
  );

  const handleOutsideClick = useCallback(
    (event: any) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape]);

  return {
    handleOutsideClick,
  };
};

export default useModal;
