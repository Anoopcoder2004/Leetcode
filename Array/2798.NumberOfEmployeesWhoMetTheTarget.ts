// Approach

// iterate through each element and check if it is equal to or greater than target.
// if yes increment count and return


function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let count: number = 0;
    for(let  i:number = 0; i < hours.length; i++){
        if(hours[i] >= target){
            count++;
        }
    }return count;
};

// Time complexity
// O (n)

// Space complexity
// O (n)