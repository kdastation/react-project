import { useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { TypesSort, typesSort } from "../../types/typeSort";
import { rootSelector } from "../../selectors/rootSelector";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { actions } from "../../model/slice";

export const TypeSort = () => {
  const dispatch = useAppDispatch();
  const type = useSelector(rootSelector.selectTypeSort);

  const options: {
    value: TypesSort;
    label: string;
  }[] = [
    {
      value: typesSort.TITLE,
      label: "По названию",
    },
    {
      value: typesSort.VIEWS,
      label: "По просмотрам",
    },
  ];

  const handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as TypesSort;
    dispatch(actions.setTypeSort(value));
  };

  return (
    <div>
      <select value={type} onChange={handleChangeType}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
