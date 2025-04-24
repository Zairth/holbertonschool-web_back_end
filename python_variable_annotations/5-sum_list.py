#!/usr/bin/env python3
"""5-sum_list.py"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """return the sum of a list as a float"""
    sum = 0
    for value in input_list:
        sum += value
    return sum
