#!/usr/bin/env python3
"""6-sum_mixed_list.py"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """return the sum of a list of int and float, as a float"""
    total = 0
    for value in mxd_lst:
        total += value
    return total
