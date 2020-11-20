from datetime import datetime
from pydantic import BaseModel
from typing import List
from collections import defaultdict
import time

class Item(BaseModel):
    date: datetime

def group(i: List[Item]):
    dic = defaultdict(list)
    for item in i:
        k = item.date.strftime("%Y-%m")
        dic[k].append(i)
    return dic

items = [
            Item(date=datetime(y, m, d)) 
            for y in range(2017, 2022)
            for m in range(1, 13) 
            for d in range(1, 29)
        ]

dict_items = group(items)

# [print(f"{item} has {len(dict_items[item])} items") for item in dict_items]
