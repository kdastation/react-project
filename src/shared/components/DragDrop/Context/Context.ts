import { DraggableSyntheticListeners } from "@dnd-kit/core";
import { createContext } from "@/shared/lib/hooks/context";

type ContextProps = {
  attributes: Record<string, any>;
  listeners: DraggableSyntheticListeners;
  ref(node: HTMLElement | null): void;
};

export const [SortableItemRootProvider, useSortableItemRoot] = createContext<ContextProps>({
  name: "SortableItemRootContext",
  hookName: "useSortableItemRoot",
  providerName: "<SortableItemRoot />",
});
