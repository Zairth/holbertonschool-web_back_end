#!/usr/bin/env python3
"""0-async_generator.py"""
import asyncio
from typing import AsyncGenerator
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> AsyncGenerator[float, None]:
    """
    collect 10 random numbers using an async comprehensing
    """
    return [i async for i in async_generator()]
