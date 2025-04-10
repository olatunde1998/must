import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/app/components/Hero";

describe("Dashboard Page Component", () => {
  test("Should renders Properly", () => {
    const { getByText } = render(<Hero />);
    // Test for the Hero Component
    const welcomeMessage = getByText("함께하는 마음이 만드는 소중한 변화");
    expect(welcomeMessage).toBeInTheDocument();
  });
});
