import { createContext, useState, useEffect, useMemo, ReactNode, useContext } from "react";

type IContext = {
  idPrefix: string, value: string
} | null;
const Context = createContext<IContext>(null);


function useUniquePrefix() {
  const [id, setId] = useState<string>('');
  useEffect(() => {
    setId(`meown-p-${Math.round(Math.random() * 1e5)}`)
  }, [])
  return id;
}


interface TabContextProps {
  children: ReactNode
  value: string
}

export default function TabContext(props: TabContextProps) {
  const { children, value } = props;
  const idPrefix = useUniquePrefix();

  const context = useMemo(() => {
    return { idPrefix, value }
  }, [idPrefix, value])

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export function useTabContext() {
  return useContext(Context)
}

export function getPanelId(context: IContext, value: string) {
  if (!context) {
    throw new Error("TabContext is not provided.")
  }
  const { idPrefix } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-P-${value}`;
}

export function getTabId(context: IContext, value: string) {
  if (!context) {
    throw new Error("TabContext is not provided.")
  }
  const { idPrefix } = context;
  if (idPrefix === null) {
    return null;
  }
  return `${context.idPrefix}-T-${value}`;
}