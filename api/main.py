from fastapi import FastAPI
import json
app = FastAPI()


def binary_sortion(arr, key, start, end):
    if arr == []:
        return start
    if end - start <= 1:
        if len(key) < len(arr[start]):
            return start + 1
        else:
            return start
    mid = (start + end)//2
    if len(arr[mid]) == len(key):
        return mid+1
    elif len(arr[mid]) > len(key):
        return binary_sortion(arr, key, mid+1, end)
    else:
        return binary_sortion(arr, key, start, mid)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/add_word/{new_word}")
def add_word(new_word: str):
    f = open('../database/data_encode.json',)
    data = json.load(f)
    f.close()
    if new_word in data:
        return False
    index = binary_sortion(data, new_word, 0, len(data))
    data.insert(index, new_word)
    with open('../database/data_encode.json', 'w') as outfile:
        json.dump(data, outfile)
    return True
