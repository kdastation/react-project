import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";

import { Modal } from "./Modal";

const TestApp = () => {
  const [visible, setVisible] = useBoolean(false);

  return (
    <>
      <button data-testid="Button.Close" onClick={setVisible.off}>
        close
      </button>
      <button data-testid="Button.Open" type="button" onClick={setVisible.on}>
        open
      </button>
      <Modal isOpen={visible} onClose={setVisible.off}>
        <div data-testid="Content">content</div>
      </Modal>
    </>
  );
};

describe("Modal", () => {
  it("content is only visible when the modal is open", async () => {
    render(<TestApp />);

    expect(screen.queryByTestId("Content")).toBeNull();

    await userEvent.click(screen.getByTestId("Button.Open"));

    expect(screen.getByTestId("Content")).toBeInTheDocument();
  });

  it("modal dont close on click content", async () => {
    render(<TestApp />);

    await userEvent.click(screen.getByTestId("Button.Open"));

    await userEvent.click(screen.getByTestId("Content"));

    expect(screen.getByTestId("Content")).toBeInTheDocument();
  });

  it("should content hide when outside click modal", async () => {
    render(<TestApp />);

    await userEvent.click(screen.getByTestId("Button.Open"));

    await userEvent.click(screen.getByTestId("Button.Close"));

    expect(screen.queryByTestId("Content")).toBeNull();
  });
});
