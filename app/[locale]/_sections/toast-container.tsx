'use client';

import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { StartState } from "../_redux/start-state";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useMemo } from "react";
import { toastAdded, toastRemoved } from "../_redux/start-slice";
import { ToastProps } from "@/types/props/toast-props";
import Toast from "../_components/toast";

export default function ToastContainer() {
  const startState: StartState = useAppSelector((state: RootState) => {
    return state.start;
  });
  const dispatch: AppDispatch = useAppDispatch();


  const { toasts } = useMemo(() => {
    return {
      toasts: startState.toasts
    }
  }, [startState.toasts]);


  return toasts.length === 0 ? null :
    (
      <div className="fixed max-w-[400px] z-[9999] bottom-4 right-4">
        {
          toasts.map((toast: ToastProps, index: number) => {
            return (
              <Toast key={`${toast.id}`}
                {...toast}
                onClose={() => {
                  dispatch(toastRemoved(toast.id));
                }} />
            )
          })
        }
      </div>
    )
}