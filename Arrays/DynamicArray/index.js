class DynamicArray {
    constructor(){
        this.capacity = 2,
        this.length = 0,
        this.arr = new Array(2)
    }

    // Insert n in the last position of the array
    pushBack(n){
        if(this.length == this.capacity)
            this.resize();
        // insert at next empty position
        this.arr[this.length] = n;
        this.length++;
    }

    resize(){
        // Create new array of double capacity
        this.capacity = 2 * this.capacity;
        // Declare anew array
        const newArr = new Array(this.capacity);
        //copy Elements to new Array
        for(let i =0 ; i < this.length ; i++)
            newArr[i] = this.arr[i];
        // use new array instead of old array
        this.arr = newArr;
    }

    // Remove the last element in the array
    popBack(){
        if(this.length > 0)
            this.length--;
    }

    // Get value at i-th index
    get(i){
        if( i < this.length)
            return this.arr[i];
        else throw new Error('out of bounds exceptio');
    }

     // Insert n at i-th index
    insert(i,n){
        if(i < this.length)
            this.arr[i] = n
        else throw new Error('out of bounds exceptio');
    }

    //Display Array
    print(){
        let s = '';
        for(let i =0 ; i < this.length ; i++)
            s += this.arr[i] + ' ';
        console.log(s);
    }
    
}