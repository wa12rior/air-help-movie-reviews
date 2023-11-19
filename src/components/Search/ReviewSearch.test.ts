import { jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ReviewSearch", () => {
  it("updates the search state and navigates on button click", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({
      push,
      query: { query: "initial query" },
    }));

    const { getByRole } = render(<ReviewSearch />);
    const input = getByRole("textbox");
    const button = getByRole("button");

    fireEvent.change(input, { target: { value: "new query" } });
    fireEvent.click(button);

    expect(input.value).toBe("new query");
    expect(push).toHaveBeenCalledWith("/?query=new query");
  });
});
