import React, { useContext } from 'react';

type TypedContextHook = <ItemType>(context: React.Context<ItemType | null>) => ItemType

const useTypedContext: TypedContextHook = (context) => {
  const contextValue = useContext(context);
  if (contextValue === null) {
    throw Error('Context has not been Provided!');
  }
  return contextValue;
};

export default useTypedContext;
