import React from "react";
import { getByTestId, render } from "@testing-library/react";
import ShowSummaryBox from "./Components/ShowSummaryBox";

const showData = {
  Name: "Fake Shows",
  Status: "Completed",
  Rating: "5",
  Image: "http://www.fakeimage.com",
};
test("renders Summary Box", () => {
  const { getByTestId } = render(<ShowSummaryBox {...showData} />);
  expect(getByTestId("name")).toHaveTextContent("Fake Shows");
  expect(getByTestId("status")).toHaveTextContent("Completed");
  expect(getByTestId("rating")).toHaveTextContent("5");
});
