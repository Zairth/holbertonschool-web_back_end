#!/usr/bin/env python3
"""1-concurrent_coroutines.py"""
from typing import List
import asyncio
from asyncio import as_completed
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Import wait_random from the previous python file that
    you have written and write an async routine called wait_n
    that takes in 2 int arguments (in this order): n and max_delay.
    You will spawn wait_random n times with the specified max_delay.
    wait_n should return the list of all the delays (float values).
    *The list of the delays should be in ascending order without
    using sort() because of concurrency.
    """
    delays = []
    tasks = []

    for _ in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        tasks.append(task)

    for task in as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
