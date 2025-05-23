#!/usr/bin/env python3
"""9-element_length.py"""
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Annotate the below function is parameters
    and return values with the appropriate types
    """

    return [(i, len(i)) for i in lst]
