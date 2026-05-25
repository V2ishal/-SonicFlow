let arr = [1, 2, 2, 3, 1, 4, 2];

for (let i = 0; i < arr.length; i++) {

    let count = 1;

    // check karo ye element pehle aa chuka hai ya nahi
    let alreadyCounted = false;

    for (let k = 0; k < i; k++) {
        if (arr[i] === arr[k]) {
            alreadyCounted = true;
            break;
        }
    }

    if (alreadyCounted) continue;

    // ab frequency count karo
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    console.log(arr[i] + " => " + count);
}