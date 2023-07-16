import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "./useDebounce";

const Input = ({ callback = () => {}, delay = 100 }: { callback?: () => void; delay?: number }) => {
  const debouncedCallback = useDebounce(callback, delay);

  const [value, setValue] = useState("");

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    debouncedCallback();
  };

  return <input data-testid="Test.Input" type="text" value={value} onChange={handleChangeValue} />;
};

const Button = ({
  callback = () => {},
  delay = 100,
}: {
  callback?: () => void;
  delay?: number;
}) => {
  const debouncedCallback = useDebounce(callback, delay);

  const handleClick = () => {
    debouncedCallback();
  };

  return (
    <button onClick={handleClick} data-testid="Test.Button">
      click
    </button>
  );
};

describe("useDebounce", () => {
  test("debounced Input ", async () => {
    const callback = jest.fn();
    render(<Input callback={callback} delay={100} />);

    const input = screen.getByTestId("Test.Input");

    await userEvent.type(input, "123213213123123213");

    expect(callback).toHaveBeenCalledTimes(0);

    await waitFor(() => expect(callback).toHaveBeenCalledTimes(0), { timeout: 50 });

    await waitFor(() => expect(callback).toHaveBeenCalledTimes(1), { timeout: 150 });
  });

  test("debounced Button", async () => {
    const callback = jest.fn();
    render(<Button callback={callback} delay={100} />);

    const button = screen.getByTestId("Test.Button");

    await userEvent.click(button);

    // TODO: maybe waitFor?

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((r) => setTimeout(r, 120));

    await userEvent.click(button);

    // eslint-disable-next-line no-promise-executor-return
    await new Promise((r) => setTimeout(r, 120));

    expect(callback).toHaveBeenCalledTimes(2);
  });
});
