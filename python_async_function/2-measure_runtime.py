#!/usr/bin/env python3
"""2-measure_runtime.py"""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    measures the total execution time for wait_n(n, max_delay)
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    result = end - start
    return result / n
