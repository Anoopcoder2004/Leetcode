// Approach
// use two pointers to swap alphabets first. 
// use two pointers to swap nonalphabets(special characters).
// return the updated string

function reverseByType(s: string): string {
    let str:string [] = s.split("");
    let left: number = 0;
    let right:number = str.length-1;
    let temp:string = "";
    while(left < right){
        if(!/[a-z]/.test(str[left])){
            left++;
            continue;
        }
        if(!/[a-z]/.test(str[right])){
            right--;
            continue;
        }
        temp=str[left];
        str[left]=str[right];
        str[right]=temp;  
        left++;
        right--;
    }
    left=0;
    right=str.length-1;
     while(left < right){
        if(/[a-z]/.test(str[left])){
            left++;
            continue;
        }
        if(/[a-z]/.test(str[right])){
            right--;
            continue;
        }
        temp=str[left];
        str[left]=str[right];
        str[right]=temp;  
        left++;
        right--;
    }
    return str.join("");
};

// Time complexity
// O(n)

// Space complexity
// O(n)