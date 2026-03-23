import { createContext } from "react";

export type ContextFilterCountType = {
    contextFilterCount: number;
    setContextFilterCount: (contextFilterCount: number) => void;
}

export const ContextFilterCount = createContext<ContextFilterCountType>({
    contextFilterCount: 0,
    setContextFilterCount: () => {}
});