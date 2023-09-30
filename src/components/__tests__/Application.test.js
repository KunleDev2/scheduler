import React from "react";
import Application from "../Application";
import { render, waitForElement,fireEvent } from "@testing-library/react";

describe("Application", () => {
    it("defaults to Monday and changes the schedule when a new day is selected", () => {
      const { getByText } = render(<Application name="Monday"/>);
    
      return waitForElement(() => getByText("Monday")).then(() => {
        fireEvent.click(getByText("Tuesday"));
        expect(getByText("Leopold Silvers")).toBeInTheDocument();
      });
    });

    it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
      const { container } = render(<Application />);
    
      await waitForElement(() => getByText(container, "Archie Cohen"));
    
      console.log(prettyDOM(container));
    });
    
  });