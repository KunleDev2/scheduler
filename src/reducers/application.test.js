import reducer from "reducers/application";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Application from "components/Application";

describe("Application Reducer", () => {
  it("thows an error with an unsupported type", () => {
    expect(() => reducer({}, { type: null })).toThrow();
  });
});
