import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import FetchData from "../../components/FetchData/FetchData";

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn();
});

test("renders data after successful fetch", async () => {
  fetch.mockResolvedValueOnce({
    json: async () => [{ id: 1, name: "Data 1" }],
  });

  render(<FetchData />);

  await waitFor(() => {
    expect(screen.getByText("Data 1")).toBeInTheDocument();
  });
});

test("renders error state on fetch failure", async () => {
  fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

  render(<FetchData />);

  await waitFor(() => {
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });
});


afterEach(() => {
  jest.resetAllMocks();
});

test("renders data after successful fetch", async () => {
  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve([{ id: 1, name: "Data 1" }]),
  });

  render(<FetchData />);

  await waitFor(() => {
    expect(screen.getByText("Data 1")).toBeInTheDocument();
  });
});

test("renders error state on fetch failure", async () => {
  fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

  render(<FetchData />);

  await waitFor(() => {
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });
});
