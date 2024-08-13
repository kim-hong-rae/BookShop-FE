import { useCallback } from "react";

export const useAlert = () => {
  const showAlert = useCallback((message: string) => {
    window.alert(message);
  }, []);

  const showConfirm = useCallback((message: string, onConfirm: () => void) => {
    if (window.confirm(message)) {
      onConfirm();
    }
  }, []);

  return { showAlert, showConfirm };
};

//useCallback 사용 이유 - 해당 함수가 필요할 때만 다시 생성되게.
