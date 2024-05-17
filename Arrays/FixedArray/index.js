//arr: An internal array to store the actual data elements.
//n: The value to be inserted (presumably during initialization or insertEnd).
//length: The current number of elements stored in the array (starts at 0).
//capacity: The maximum number of elements the array can hold..

//================================
// implementations Of Fixed Array :)
//================================
class FixedArray{
    /*
        This method attempts to insert the value n at the end of the array. However, it only does so if there's space available (i.e., length is less than capacity).
    */
    insertEnd(arr , n , length , capacity){
        if(length < capacity)
            arr[length] = n;
    }

    // Remove from the last position in the array if the array
    removeEnd(arr,length){
        if(length > 0){
            arr[length - 1] = 0;
            length--;
        }
    }

    // Insert n into index i after shifting elements to the right.
    // Assuming i is a valid index and arr is not full.
    /*عشان تحط الرقم الجديد لازم تحرك كل العناصر اللي بعد المكان اللي عايز تحط فيه الرقم الجديد خطوة لورا. علشان كده بيدور الكود من آخر الـ arr لحد قىبل المكان اللي عايز تحط فيه الرقم الجديد (i - 1). */
    insetMiddle(arr,length,n,i){
        for(let index = length -1 ; index > i ; index--){
            arr[index + 1] = arr[index]
        }
        // insert the value at i
        arr[i] = n
    }

    // Remove value at index i before shifting elements to the left.
    // Assuming i is a valid index.
    removeMiddle(arr,length,i){
        for(let index = i + 1 ; index < length ; index++)
            arr[index - 1 ] = arr[index]
        // No need to 'remove' arr[i], since we already shifted
    }

    // print value of array
    printArr(arr,length){
        let s = ''
        for(let i = 0 ; i < length ; i++)
            s+= arr[i] + ' '
        console.log(s);
    }

}
