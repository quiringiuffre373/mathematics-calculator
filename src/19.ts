let result = 0;
while (true) {
    let input = readLine();
    if (!input) break;

    try {
        let number = parseInt(input);
        result += number;
    } catch (e) {
        console.log(`Invalid input: ${e.message}`);
        continue;
    }
}
console.log(`Final result: ${result}`);
