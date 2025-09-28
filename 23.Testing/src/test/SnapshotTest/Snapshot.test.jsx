import React from "react";
import { render } from "@testing-library/react";
import SnapshotDemo from "../../components/SnapshotDemo/SnapshotDemo";

describe("SnapshotDemo Component", () => {
  test("matches the snapshot", () => {
    const { asFragment } = render(<SnapshotDemo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
