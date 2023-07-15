import { useSelector } from "react-redux";
import { ChangeEvent, FC } from "react";
import { OrderSort as OrderSortType } from "@/shared/types/OrderSort";
import { rootSelector } from "../../selectors/rootSelector";
import { actions } from "../../model/slice/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { FilterProps } from "../../model/types/FilterProps";

export const OrderSort: FC<FilterProps> = ({ fetchData }) => {
  const dispatch = useAppDispatch();
  const order = useSelector(rootSelector.selectOrderSort);

  const options: {
    value: OrderSortType;
    label: string;
  }[] = [
    {
      value: "asc",
      label: "По возрастанию",
    },
    {
      value: "desc",
      label: "По убыванию",
    },
  ];

  const handleChangeOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as OrderSortType;

    dispatch(actions.setOrderSort(value));

    fetchData?.();
  };

  return (
    <div>
      <select value={order} onChange={handleChangeOrder}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
