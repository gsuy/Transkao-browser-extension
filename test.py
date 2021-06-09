import json
arr = ["a", "asdad", "dqw", "asdad", "asd", "asdq", "qesd", "12312",
       "dqwe123123123", "asds", "Qwe123", "123123", "12344", "1", "sd", "c", "142"]


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

sum_arr = []
for i in arr:
    sum_arr.insert(binary_sortion(sum_arr,i, 0, len(sum_arr)),i)
print(sum_arr)
# for i in arr: