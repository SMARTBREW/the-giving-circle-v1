from __future__ import annotations

from typing import Annotated

from pydantic import AfterValidator


def _require_agreed(value: bool) -> bool:
    if value is not True:
        raise ValueError("You must agree to receive updates")
    return value


# Required bool; omitting the field fails validation; false fails this check.
Agreed = Annotated[bool, AfterValidator(_require_agreed)]
