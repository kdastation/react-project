import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { createContext } from "react";

type ContextProps = {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
};

export const Context = createContext<ContextProps | null>(null);

export const ContextProvider = Context.Provider;
