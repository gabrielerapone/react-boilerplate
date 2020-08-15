import React from "react";
import { storiesOf } from "@storybook/react";
// Components
import Button from "components/button";

storiesOf("Button", module)
  .add("Primary", () => <Button>Primary</Button>)
  .add("Secondary", () => <Button type="secondary">Secondary</Button>)
  .add("Tertiary", () => <Button type="tertiary">Tertiary</Button>)
  .add("Primary disabled", () => (
    <Button state="disabled">Primary disabled</Button>
  ))
  .add("Secondary disabled", () => (
    <Button type="secondary" state="disabled">
      Secondary disabled
    </Button>
  ))
  .add("Tertiary disabled", () => (
    <Button type="tertiary" state="disabled">
      Tertiary disabled
    </Button>
  ));
